-- Witness Website: Leads & Contacts Schema
-- This migration creates tables for form submissions and contact management

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contacts table: unified contact records (deduplicates across forms)
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  organization TEXT,
  region TEXT,
  contact_type TEXT, -- 'general_user', 'newsroom', 'contributor', 'partner'
  trust_score INTEGER DEFAULT 0,
  
  -- Marketing consent
  consent_product_updates BOOLEAN DEFAULT false,
  consent_marketing BOOLEAN DEFAULT false,
  unsubscribed BOOLEAN DEFAULT false,
  
  -- Tracking
  source_page TEXT, -- which page/CTA they came from
  last_submission_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Submissions table: individual form submissions
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  form_type TEXT NOT NULL, -- 'waitlist', 'newsroom', 'contributor', 'partner'
  
  -- Form data (JSON for flexibility)
  form_data JSONB NOT NULL,
  
  -- Processing
  status TEXT DEFAULT 'pending', -- 'pending', 'reviewed', 'contacted', 'converted'
  internal_notes TEXT,
  reviewed_by TEXT,
  reviewed_at TIMESTAMPTZ,
  
  -- Tracking
  ip_address TEXT,
  user_agent TEXT,
  source_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Email send logs: track transactional emails
CREATE TABLE email_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
  submission_id UUID REFERENCES submissions(id) ON DELETE SET NULL,
  email_type TEXT NOT NULL, -- 'confirmation', 'internal_alert', 'update'
  recipient_email TEXT NOT NULL,
  subject TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'sent', 'failed'
  error_message TEXT,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for performance
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_type ON contacts(contact_type);
CREATE INDEX idx_submissions_contact ON submissions(contact_id);
CREATE INDEX idx_submissions_form_type ON submissions(form_type);
CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_created ON submissions(created_at DESC);
CREATE INDEX idx_email_logs_contact ON email_logs(contact_id);
CREATE INDEX idx_email_logs_status ON email_logs(status);

-- Enable RLS (Row Level Security) for basic protection
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Allow unauthenticated inserts (for form submissions)
-- but select/update only for authenticated admin users
CREATE POLICY "allow_insert_contacts" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "allow_insert_submissions" ON submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "allow_insert_email_logs" ON email_logs
  FOR INSERT WITH CHECK (true);

-- Timestamps helper: auto-update updated_at on contact changes
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_submissions_updated_at
  BEFORE UPDATE ON submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

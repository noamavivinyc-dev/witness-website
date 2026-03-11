'use client'

import { useState } from 'react'

export default function NewsroomForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    workEmail: '',
    regionFocus: '',
    organizationSize: 'medium',
    useCase: '',
    message: '',
    consentFollowUp: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsroom',
          ...formData,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)
      setTimeout(() => {
        onSuccess()
      }, 2000)
    } catch (err: any) {
      setError(err.message || 'Failed to submit form')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-[#0D7C3D] font-medium">Request received!</p>
        <p className="text-sm text-[#4A453F] mt-2">Our team will review and contact you within 2–3 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="bg-red-100 text-red-700 p-3 rounded text-sm">{error}</div>}

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          Organization *
        </label>
        <input
          type="text"
          name="organizationName"
          required
          value={formData.organizationName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A]"
          placeholder="Your organization"
        />
      </div>

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          Contact Name *
        </label>
        <input
          type="text"
          name="contactName"
          required
          value={formData.contactName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A]"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          Organization Size
        </label>
        <select
          name="organizationSize"
          value={formData.organizationSize}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A]"
        >
          <option value="small">Small (&lt;50 staff)</option>
          <option value="medium">Medium (50–500 staff)</option>
          <option value="large">Large (500+ staff)</option>
        </select>
      </div>

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          Primary Use Case *
        </label>
        <textarea
          name="useCase"
          required
          value={formData.useCase}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A] resize-none"
          placeholder="How would your organization use Witness?"
          rows={3}
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          name="consentFollowUp"
          checked={formData.consentFollowUp}
          onChange={handleChange}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-[#4A453F]">
          Our team can follow up with a product demo or trial access
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#2E2B26] text-[#F2EFE9] font-mono text-xs tracking-widest uppercase cursor-pointer transition-colors hover:bg-[#E8440A] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Request Access'}
      </button>
    </form>
  )
}

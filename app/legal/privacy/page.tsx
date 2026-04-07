import LegalPage from '@/components/LegalPage'
import { PRIVACY_POLICY, PRIVACY_POLICY_DATE } from '@/lib/legal'

export default function PrivacyPage() {
  return (
    <LegalPage
      category="Privacy Policy"
      title="Privacy Policy"
      subtitle="What data we collect and how we use it."
      effectiveDate={PRIVACY_POLICY_DATE}
      body={PRIVACY_POLICY}
    />
  )
}

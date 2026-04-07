import LegalPage from '@/components/LegalPage'
import { CONTENT_POLICY, CONTENT_POLICY_DATE } from '@/lib/legal'

export default function ContentPolicyPage() {
  return (
    <LegalPage
      category="Content Policy"
      title="Content Policy"
      subtitle="What is and is not allowed on the platform."
      effectiveDate={CONTENT_POLICY_DATE}
      body={CONTENT_POLICY}
    />
  )
}

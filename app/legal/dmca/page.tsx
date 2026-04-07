import LegalPage from '@/components/LegalPage'
import { DMCA_POLICY, DMCA_POLICY_DATE } from '@/lib/legal'

export default function DmcaPage() {
  return (
    <LegalPage
      category="DMCA / Copyright"
      title="DMCA / Copyright"
      subtitle="How we handle copyright claims."
      effectiveDate={DMCA_POLICY_DATE}
      body={DMCA_POLICY}
    />
  )
}

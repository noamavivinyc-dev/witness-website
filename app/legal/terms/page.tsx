import LegalPage from '@/components/LegalPage'
import { TERMS_OF_SERVICE, TERMS_OF_SERVICE_DATE } from '@/lib/legal'

export default function TermsPage() {
  return (
    <LegalPage
      category="Terms of Service"
      title="Terms of Service"
      subtitle="The rules for using Witness."
      effectiveDate={TERMS_OF_SERVICE_DATE}
      body={TERMS_OF_SERVICE}
    />
  )
}

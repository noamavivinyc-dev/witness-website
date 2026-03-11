'use client'

import { useState } from 'react'

export default function WaitlistForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: '',
    userType: 'news_junkie',
    interestArea: '',
    message: '',
    consentUpdates: true,
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
          formType: 'waitlist',
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
        <p className="text-[#0D7C3D] font-medium">You're on the waitlist!</p>
        <p className="text-sm text-[#4A453F] mt-2">Check your email for confirmation.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="bg-red-100 text-red-700 p-3 rounded text-sm">{error}</div>}

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
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
          Region
        </label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A]"
          placeholder="Your location"
        />
      </div>

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          User Type
        </label>
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A]"
        >
          <option value="journalist">Journalist</option>
          <option value="researcher">Researcher</option>
          <option value="news_junkie">News Junkie</option>
          <option value="eyewitness">Eyewitness</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block font-mono text-xs tracking-wider uppercase text-[#8A857D] mb-2">
          What interests you about Witness?
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#CEC9BC] rounded bg-white text-[#2C2820] focus:outline-none focus:border-[#E8440A] resize-none"
          placeholder="Tell us a bit more (optional)"
          rows={3}
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          name="consentUpdates"
          checked={formData.consentUpdates}
          onChange={handleChange}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-[#4A453F]">
          Send me updates about Witness launches and new features
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#2E2B26] text-[#F2EFE9] font-mono text-xs tracking-widest uppercase cursor-pointer transition-colors hover:bg-[#E8440A] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Joining...' : 'Join Waitlist'}
      </button>
    </form>
  )
}

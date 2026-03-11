'use client'

export default function FormModal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#F2EFE9] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#F2EFE9] border-b border-[#CEC9BC] px-6 py-4 flex justify-between items-center">
          <h2 className="font-display text-xl font-700 text-[#2C2820]">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#8A857D] hover:text-[#2C2820] text-2xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

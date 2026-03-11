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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-[#F2EFE9] rounded-t-lg sm:rounded-lg shadow-xl w-full sm:max-w-md max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#F2EFE9] border-b border-[#CEC9BC] px-5 py-4 flex justify-between items-center">
          <h2 className="font-display text-lg sm:text-xl font-700 text-[#2C2820]">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#8A857D] hover:text-[#2C2820] text-2xl leading-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="p-5 sm:p-6">{children}</div>
      </div>
    </div>
  )
}

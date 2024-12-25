import { PenSquare } from 'lucide-react'

interface AddressCardProps {
  isSelected?: boolean
  pincode: string
  phone: string
  address: string
  city?: string
  postalCode?: string
}

export function AddressCard({ isSelected, pincode, phone, address, city, postalCode }: AddressCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${isSelected ? 'border-white-600 bg-white-600' : 'border-gray-300'}`} />
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <span>Delivering to -</span>
                <span className="font-medium">{pincode}</span>
                <span className="text-gray-400">|</span>
                <span className="font-medium">{phone}</span>
              </div>
              <p className="text-gray-600">{address}</p>
              {city && postalCode && (
                <p className="text-gray-600">{city}, {postalCode}</p>
              )}
            </div>
            {isSelected && (
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <span>edit</span>
                <PenSquare className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


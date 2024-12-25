import Image from "next/image"
import { Download, Star, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export default function OrderTracking() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Order Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start shadow-md">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Order Id : </span>
              <a href="#" className="text-blue-600 text-sm">ajdj1323r34e3e3nn4r3322</a>
            </div>
            <div className="flex gap-4">
              <Image
                src="/DELIVERY.png"
                alt="Pickle"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <p className="text-gray-600">Andhra pickle Store</p>
                <h2 className="font-semibold">Chicken Pickle(250 g)</h2>
              </div>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download invoice
          </Button>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 shadow-md">
        <h3 className="font-semibold text-lg">Delivery Address</h3>
        <div className="space-y-2">
          <p className="font-medium">Jagadeesh reddy</p>
          <p className="text-gray-600">
            mig-125 , near hostel,
            <br />
            kphb colony, hyderabad,
            <br />
            telengana, 500072
          </p>
          <p className="text-gray-600">Phone number - 77804xxxx6</p>
        </div>

        {/* Order Timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-orange-500"></div>
          <div className="relative flex justify-between">
            <div className="text-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium">Order Confirmed</p>
              <p className="text-xs text-gray-500">10 nov</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium">Shipped</p>
              <p className="text-xs text-gray-500">11 nov</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium">Out for delivery</p>
              <p className="text-xs text-gray-500">13 nov</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium">Delivered</p>
              <p className="text-xs text-gray-500">13 nov</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rating and Review */}
      
     <div className="col-span-2">
       Rate the item- 
       
     </div>
     <div className="col-span-6">
        hii

     </div>
    </div>
  )
}


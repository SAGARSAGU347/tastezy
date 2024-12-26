import Image from "next/image";
import { Sidebar } from "../components/Sidebar";


export default function OrdersPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-7xl mx-auto space-y-4">
         
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/Delivery.png"
                alt="Chicken Pickle"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">Andhra Pickle Store</p>
              <h3 className="font-medium text-black">Chicken Pickle (250 g)</h3>
            </div>
            <div className="text-right text-sm">
              <p className="font-medium text-black"><li className="bullet1">delivery expected by 24 Nov</li></p>
              <p className="text-gray-500">Item yet to deliver on the way</p>
            </div>
          </div>

       
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-start gap-4 mb-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/Delivery.png"
                  alt="Chicken Pickle"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Andhra Pickle Store</p>
                <h3 className="font-medium text-black">Chicken Pickle (250 g)</h3>
              </div>
              <div className="text-right text-sm mt-4">
                <p className="font-medium text-black"> <li className="bullet1">Order Delivered on Oct 11</li></p>
                <p className="text-gray-500">Item reached you</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/Delivery.png"
                  alt="Chicken Pickle"
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1 ">
                <p className="text-sm text-gray-600"> <i className="fas fa-wifi-1"></i>Andhra Pickle Store</p>
                <h3 className="font-medium text-black"> CoffeeChicken Pickle (250 g)</h3>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

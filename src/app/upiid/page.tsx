import { Sidebar } from "../components/Sidebar";
import { Trash2 } from "lucide-react";

export default function SavedPayments() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 border-r border-gray-300">
        <Sidebar />
      </aside>

      <main className="flex-1 p-6 bg-gray-50">
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Saved UPI IDs</h2>
          <div className="space-y-4 ">
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <span>jagadeesh@ybl </span>

              <button className="text-black-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <span>jagadeesh@ybl</span>
              <button className="text-black-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Saved Cards */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Saved Cards</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <div>
                <h3 className="font-medium">HDFC Bank</h3>
                <p className="text-gray-500 text-sm">**** **** **** 1234</p>
              </div>
              <button className="text-black-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded shadow-md">
              <div>
                <h3 className="font-medium">HDFC Bank</h3>
                <p className="text-gray-500 text-sm">**** **** **** 4321</p>
              </div>
              <button className="text-black-400 hover:text-red-500">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="w-500 h-500 bg-blue-500 ">
              hello 

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

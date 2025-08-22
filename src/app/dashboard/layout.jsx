import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import ClientOnly from "@/components/ClientOnly";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ClientOnly>
          <Header />
        </ClientOnly>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}

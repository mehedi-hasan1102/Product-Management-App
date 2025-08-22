"use client";
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LayoutContent = ({ children }) => {
  const pathname = usePathname();
  const showNavbar = !pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {showNavbar && (
        <header>
          <Navbar />
        </header>
      )}

      <main className="flex-1">
        {children}
      </main>

      {showNavbar && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default LayoutContent;

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return; // only run scroll listener on home

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // For other routes → force solid navbar
  const solidNavbar = !isHome || scrolled;

  // Navlinks
  const Navlinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/dashboard">Dashboard</Link></li>
    </>
  );

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 w-full border-b transition-colors duration-300 ${
        solidNavbar
          ? "bg-white/80 border-black shadow-md backdrop-blur-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-between items-center h-16">
        {/* Navbar Start */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <div
              tabIndex={0}
              className={`btn btn-ghost p-2 rounded-md transition ${
                solidNavbar ? "hover:bg-sky-100" : "hover:bg-white/20"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition ${
                  solidNavbar ? "text-sky-600" : "text-white"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-2 p-4 w-52 rounded-lg shadow-lg flex flex-col gap-2 ${
                solidNavbar ? "bg-white text-gray-700" : "bg-black/80 text-white"
              }`}
            >
              {Navlinks}
            </ul>
          </div>

          {/* App Name */}
          <Link
            href="/"
            className={`text-2xl font-bold transition ${
              solidNavbar ? "text-sky-600 hover:text-sky-500" : "text-white hover:text-gray-200"
            }`}
          >
            Productly
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 font-medium gap-6 transition ${
              solidNavbar ? "text-gray-700" : "text-white"
            }`}
          >
            {Navlinks}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-3">
          {status === "authenticated" ? (
            <div className="flex items-center gap-3">
              <span
                title={session?.user?.name}
                className={`px-4 py-2 text-sm font-medium border rounded-lg transition-colors duration-200 ${
                  solidNavbar
                    ? "text-gray-800 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                    : "text-white border-white hover:bg-white/20"
                }`}
              >
                {session?.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className={`px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors duration-200 ${
                  solidNavbar
                    ? "text-white bg-gradient-to-r from-emerald-500 to-cyan-600  hover:opacity-90 transition"
                    : "text-white bg-transparent border border-white hover:bg-white hover:text-black"
                }`}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className={`px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors duration-200 ${
                  solidNavbar
                    ? "text-white bg-gradient-to-r from-emerald-500 to-cyan-600  hover:opacity-90 transition"
                    : "text-white border border-white bg-transparent hover:bg-white hover:text-black"
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors duration-200 ${
                  solidNavbar
                    ? "text-sky-600 border border-sky-600 hover:bg-sky-50"
                    : "text-white border border-white bg-transparent hover:bg-white hover:text-black"
                }`}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

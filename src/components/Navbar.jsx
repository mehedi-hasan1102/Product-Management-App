"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { data: session, status } = useSession();

  console.log("User session:", session);
  console.log("Auth status:", status);

  const Navlinks = (
    <>
      <li>
        <Link href={""}>Home</Link>
      </li>
      <li>
        <Link href={""}>About</Link>
      </li>
      <li>
        <Link href={""}>Careers</Link>
      </li>
      <li>
        <Link href={""}>History</Link>
      </li>
      <li>
        <Link href={""}>Services</Link>
      </li>
      <li>
        <Link href={""}>Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 fixed top-0 left-0 right-0 z-50 shadow w-11/12 mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {status == "authenticated" ? (
          <>
            {
              <div className="flex items-center gap-3">
                {/* User name */}
                <span
                  title={session?.user?.name}
                  className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-lg 
               hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
                >
                  {session?.user?.name}
                </span>

                {/* Logout button */}
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg 
             hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200 shadow-sm"
                >
                  Logout
                </button>
              </div>
            }
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              {/* Filled button - Login */}
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg 
               hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200 shadow-sm"
              >
                Login
              </Link>

              {/* Outline button - Register */}
              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-lg 
               hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 shadow-sm"
              >
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;

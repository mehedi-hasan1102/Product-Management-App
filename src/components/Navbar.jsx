// "use client";
// import { signOut, useSession } from "next-auth/react";
// import Link from "next/link";
// import React from "react";

// function Navbar() {
//   const { data: session, status } = useSession();

//   console.log("User session:", session);
//   console.log("Auth status:", status);

//   const Navlinks = (
//     <>
//       <li>
//         <Link href={""}>Home</Link>
//       </li>
//       <li>
//         <Link href={""}>Products</Link>
//       </li>
//       {/* <li>
//         <Link href={""}>Careers</Link>
//       </li>
//       <li>
//         <Link href={""}>History</Link>
//       </li>
//       <li>
//         <Link href={""}>Services</Link>
//       </li>
//       <li>
//         <Link href={""}>Blog</Link>
//       </li> */}
//     </>
//   );
//   return (
//     <div className="navbar p-0 fixed top-0 left-0 right-0 z-50 shadow w-11/12 mx-auto bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {Navlinks}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Productly</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
//       </div>
//       <div className="navbar-end gap-2">
//         {status == "authenticated" ? (
//           <>
//             {
//               <div className="flex items-center gap-3">
//                 {/* User name */}
//                 <span
//                   title={session?.user?.name}
//                   className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-lg 
//                hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   {session?.user?.name}
//                 </span>

//                 {/* Logout button */}
//                 <button
//                   onClick={() => signOut()}
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg 
//              hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200 shadow-sm"
//                 >
//                   Logout
//                 </button>
//               </div>
//             }
//           </>
//         ) : (
//           <>
//             <div className="flex items-center gap-3">
//               {/* Filled button - Login */}
//               <Link
//                 href="/login"
//                 className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg 
//                hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200 shadow-sm"
//               >
//                 Login
//               </Link>

//               {/* Outline button - Register */}
//               <Link
//                 href="/register"
//                 className="px-4 py-2 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-lg 
//                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 shadow-sm"
//               >
//                 Register
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { data: session, status } = useSession();

  // Navlinks as JSX fragment (no map needed)
  const Navlinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-between items-center h-16">
        {/* Navbar Start */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <div tabIndex={0} className="btn btn-ghost p-2 rounded-md hover:bg-sky-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 p-4 w-52 bg-white shadow-lg rounded-lg text-gray-700 flex flex-col gap-2"
            >
              {Navlinks}
            </ul>
          </div>

          {/* App Name */}
          <Link href="/" className="text-2xl font-bold text-sky-600 hover:text-sky-500 transition">
            Productly
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-700 font-medium gap-6">
            {Navlinks}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-3">
          {status === "authenticated" ? (
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
                className="px-4 py-2 text-sm font-medium text-white bg-sky-600 border border-sky-600 rounded-lg 
             hover:bg-white hover:text-sky-600 hover:border-sky-600 transition-colors duration-200 shadow-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Login */}
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-sky-600 border border-sky-600 rounded-lg 
               hover:bg-white hover:text-sky-600 transition-colors duration-200 shadow-sm"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                href="/register"
                className="px-4 py-2 text-sm font-medium text-sky-600 bg-transparent border border-sky-600 rounded-lg 
               hover:bg-sky-50 hover:text-sky-600 transition-colors duration-200 shadow-sm"
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

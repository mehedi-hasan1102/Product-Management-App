// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FaTachometerAlt, FaBox, FaPlus, FaUser, FaList, FaShoppingBag, FaHome } from 'react-icons/fa';

// const Sidebar = () => {
//   const pathname = usePathname();

//   const navLinks = [
//     { href: '/', label: 'Back to Home', icon: FaHome },
//     { href: '/dashboard', label: 'Dashboard', icon: FaTachometerAlt },
//     { href: '/dashboard/my-products', label: 'My Products', icon: FaBox },
//     { href: '/dashboard/add-product', label: 'Add Product', icon: FaPlus },
//   ];

//   return (
//     <aside className="w-full lg:w-64 bg-gray-800 text-white flex-shrink-0 lg:h-screen lg:sticky lg:top-0">
//       <div className="p-6 text-2xl font-bold text-yellow-400 flex items-center">
//         <FaShoppingBag className="mr-3" />
//         <span>ProductAdmin</span>
//       </div>
//       <nav className="p-4">
//         <ul>
//           {navLinks.map((link) => (
//             <li key={link.href} className="mb-2">
//               <Link
//                 href={link.href}
//                 className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
//                   pathname === link.href
//                     ? 'bg-yellow-400 text-gray-900'
//                     : 'hover:bg-gray-700'
//                 }`}>
//                 <link.icon className="mr-3" />
//                 <span>{link.label}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaBox,
  FaPlus,
  FaShoppingBag,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Back to Home", icon: FaHome },
    { href: "/dashboard", label: "Dashboard", icon: FaTachometerAlt },
    { href: "/dashboard/my-products", label: "My Products", icon: FaBox },
    { href: "/dashboard/add-product", label: "Add Product", icon: FaPlus },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white/70 backdrop-blur-xl border-r border-cyan-100 flex-shrink-0 lg:h-screen lg:sticky lg:top-0 shadow-md">
      {/* Logo / Brand */}
      <div className="p-6 flex items-center gap-3 border-b border-cyan-100">
        <FaShoppingBag className="text-cyan-600 text-3xl" />
        <span className="text-2xl font-bold tracking-wide text-cyan-700">
          Productly Dashboard
        </span>
      </div>

      {/* Nav links */}
      <nav className="p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md"
                      : "text-cyan-700 hover:bg-cyan-50"
                  }`}
                >
                  <link.icon
                    className={`mr-3 text-lg ${
                      isActive ? "text-white" : "text-cyan-500"
                    }`}
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

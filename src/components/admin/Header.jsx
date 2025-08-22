"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaBell, FaSearch } from "react-icons/fa";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="relative w-full max-w-md">
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="text-gray-600 h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <Image
            src={session?.user?.image || "/xxx.jpg"}
            alt={session?.user?.name || "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-gray-700">{session?.user?.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

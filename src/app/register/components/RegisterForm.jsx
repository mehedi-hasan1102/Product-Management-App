"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

export default function RegisterForm() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    await registerUser({ name, email, password });
  };
  return (
    
    <form onSubmit={handleRegister} className="flex flex-col gap-4 ">
      <label
        htmlFor="name"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Name
      </label>
      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <label
        htmlFor="email"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Email
      </label>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="Enter your email"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <label
        htmlFor="password"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Password
      </label>
      <input
        name="password"
        type="password"
        id="password"
        placeholder="Enter your password"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <button
        type="submit"
        className="mt-4 t p-3 sm:p-4 rounded text-white bg-gradient-to-r from-emerald-500 to-cyan-600  hover:opacity-90 transition  text-sm sm:text-base"
      >
        Register
      </button>
    </form>
  );
}

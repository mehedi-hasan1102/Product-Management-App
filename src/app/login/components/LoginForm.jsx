"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
        form.reset();
        // Handle successful login
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login failed. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
        // Handle login error
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 p-8">
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
        className="text-white bg-gradient-to-r from-emerald-500 to-cyan-600  hover:opacity-90 transition mt-4  p-3 sm:p-4 rounded  text-sm sm:text-base"
      >
        Login
      </button>
    </form>
  );
}

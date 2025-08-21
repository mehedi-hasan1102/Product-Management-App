import Link from "next/link";
import React from "react";
import RegisterForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <RegisterForm />

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-xs sm:text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

       <SocialLogin />

        <p className="mt-4 text-center text-gray-600 text-xs sm:text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

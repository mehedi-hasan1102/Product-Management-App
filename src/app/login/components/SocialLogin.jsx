"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
export default function SocialLogin() {
  const session = useSession();
  const router = useRouter();
  const handleGoogleLogin = async (providerName) => {
    // Implement Google login logic here
    await signIn(providerName, { redirect: false });
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    }
  }, [session, router]);

  return (
    <div>
      <button
        onClick={() => handleGoogleLogin("google")}
        className="w-full border border-gray-300 p-3 sm:p-4 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition text-sm sm:text-base"
      >
        <FaGoogle className="" />
        Login with Google
      </button>
    </div>
  );
}

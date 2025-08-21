"use client"
import React from "react";
import AddProductForm from "./components/AddProductForm";

export default function AddProductPage() {
  return (
    <div className="min-h-screen ">
      <div className=" bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Add New Product
        </h1>
        <AddProductForm />
      </div>
    </div>
  );
}

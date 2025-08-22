"use client";

import AddProductForm from "@/components/admin/AddProductForm";
import ClientOnly from "@/components/ClientOnly";

const AddProductPage = () => {
  return (
    <ClientOnly>
      <div className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Add New Product
          </h1>
          <p className="text-gray-600 mt-2">
            Fill out the form below to add a new product to your collection.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 max-w-3xl mx-auto">
          <AddProductForm />
        </div>
      </div>
    </ClientOnly>
  );
};

export default AddProductPage;

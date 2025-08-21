"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { addProduct } from "@/app/actions/auth/addproduct";
import Swal from "sweetalert2";

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    register("image", { required: "Image is required" });
  }, [register]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      trigger("image");
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setValue("image", file);
      trigger("image");
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
    setValue("image", null);
    trigger("image");
    document.getElementById("image-upload").value = "";
  };

  const onSubmit = async (data) => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=9683ba99474011560739e696292fa9e0`,
          formData
        );
        data.image = response.data.data.url;
      } catch (error) {
        console.error("Image upload failed:", error);
        alert("Image upload failed. Please try again.");
        return;
      }
    }

    try {
      const result = await addProduct(data);

      if (result.acknowledged) {
        Swal.fire({
          title: "Success!",
          text: "Product added successfully!",
          icon: "success",
          confirmButtonText: "OK",
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add product.",
          icon: "error",
          confirmButtonText: "OK",
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while adding the product. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        timer: 1500,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Product Images - Full Width */}
      <div>
        <label
          htmlFor="images"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Product Images
        </label>
        <div
          className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer
                     ${
                       isDragging
                         ? "border-blue-500 bg-blue-50"
                         : "border-gray-300"
                     } transition-all duration-300`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() =>
            !preview && document.getElementById("image-upload").click()
          }
        >
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          {preview ? (
            <div className="relative inline-block">
              <img
                src={preview}
                alt="Preview"
                className="mx-auto h-32 w-32 rounded-full object-cover shadow-lg"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300"
              >
                <AiOutlineClose />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2">
              <FaCloudUploadAlt className="text-5xl text-gray-400" />
              <p className="text-gray-500">
                Drag and drop an image here, or click to select one
              </p>
            </div>
          )}
        </div>
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      {/* Product Name, Category, Price - Same Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Product Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            {...register("name", { required: "Product name is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Books">Books</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            {...register("price", { required: "Price is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
      </div>

      {/* Description - Full Width */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Enter product description"
          {...register("description", { required: "Description is required" })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={6}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Submit Button - Full Width */}
      <div>
        <button
          type="submit"
          className="w-full px-6 py-3 cursor-pointer text-white bg-blue-600 border border-blue-600 rounded-lg 
                         hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200 shadow-sm"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}

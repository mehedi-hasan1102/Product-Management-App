"use client";

import { useState, useEffect } from "react";

const EditProductForm = ({ product }) => {
  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTitle(product.title);
    setCategory(product.category);
    setPrice(product.price);
    setImage(product.image);
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const updatedProductData = {
      title,
      category,
      price,
      image,
    };

    try {
      const res = await fetch(`/api/products/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProductData),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">Product updated successfully!</div>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-bold mb-2">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-bold mb-2">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-bold mb-2">Image URL</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>
      <button type="submit" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500" disabled={loading}>
        {loading ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
};

export default EditProductForm;

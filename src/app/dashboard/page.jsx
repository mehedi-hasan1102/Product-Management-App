

"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ProductList from "@/components/admin/ProductList";
import ClientOnly from "@/components/ClientOnly";
import Link from "next/link";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-lg text-gray-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-red-600 font-medium">
        Error: {error}
      </div>
    );
  }

  const myProducts = products.filter(
    (product) => product.createdBy === session?.user?.email
  );

  const productsByCategory = myProducts.reduce((acc, product) => {
    const category = product.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category]++;
    return acc;
  }, {});

  const chartData = Object.keys(productsByCategory).map((category) => ({
    name: category,
    products: productsByCategory[category],
  }));

  const handleProductDeleted = (deletedProductId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== deletedProductId)
    );
  };

  return (
    <ClientOnly>
      <div className="p-6">
        {/* Greeting */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Welcome back,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600">
            {session?.user?.name || "User"}
          </span>
          !
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-2xl shadow-md border border-emerald-100">
            <h2 className="text-sm font-medium text-gray-600">Total Products</h2>
            <p className="text-4xl font-extrabold text-emerald-600 mt-2">
              {myProducts.length}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 p-6 rounded-2xl shadow-md border border-cyan-100">
            <h2 className="text-sm font-medium text-gray-600">Categories</h2>
            <p className="text-4xl font-extrabold text-cyan-600 mt-2">
              {Object.keys(productsByCategory).length}
            </p>
          </div>

          <div className="flex items-center justify-center bg-gradient-to-br from-emerald-100 to-cyan-100 p-6 rounded-2xl shadow-md border border-emerald-200">
            <Link
              href="/dashboard/add-product"
              className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
            >
              + Add New Product
            </Link>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Products by Category
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="products" fill="#059669" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        
        
      </div>
    </ClientOnly>
  );
};

export default DashboardPage;

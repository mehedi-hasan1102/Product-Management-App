"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ProductList from "@/components/admin/ProductList";
import ClientOnly from "@/components/ClientOnly";
import Link from "next/link";

const MyProductsPage = () => {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(`Failed to fetch products: ${res.status} ${res.statusText} - ${errorData.message || 'Unknown error'}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
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

  const handleProductDeleted = (deletedProductId) => {
    console.log("Attempting to delete product with ID:", deletedProductId);
    setProducts((prevProducts) => {
      console.log("Previous products state:", prevProducts);
      const updatedProducts = prevProducts.filter((product) => {
        console.log(`Comparing ${product._id} with ${deletedProductId}`);
        return product._id !== deletedProductId;
      });
      console.log("Updated products state after filter:", updatedProducts);
      return updatedProducts;
    });
  };

  return (
    <ClientOnly>
      <div className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            My Products
          </h1>
          <Link
            href="/dashboard/add-product"
            className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
          >
            + Add New Product
          </Link>
        </div>

        {/* Products List */}
        {myProducts.length > 0 ? (
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <ProductList
              products={myProducts}
              onProductDeleted={handleProductDeleted}
            />
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg py-20 bg-white rounded-2xl shadow-md border border-gray-100">
            No products found. Start by adding your first product!
          </div>
        )}
      </div>
    </ClientOnly>
  );
};

export default MyProductsPage;

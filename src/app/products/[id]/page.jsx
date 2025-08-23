"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`/api/products/${id}`);
          if (!res.ok) {
            throw new Error("Failed to fetch product");
          }
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    // <div className="container mx-auto px-4 py-8 ">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
    //     <div>
    //       {product.image && (
    //         <Image
    //           src={product.image}
    //           alt={product.name}
    //           width={500}
    //           height={500}
    //           className="rounded-lg"
    //         />
    //       )}
    //     </div>
    //     <div>
    //       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
    //       <p className="text-gray-700 mb-4">{product.description}</p>
    //       <p className="text-gray-900 font-bold text-2xl">{product.price}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8 min-h-screen">
    {/* Product Image */}
    <div className="flex justify-center">
      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      )}
    </div>

    {/* Product Details */}
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        {product.description}
      </p>
      <p className="text-3xl font-bold text-indigo-600">{product.price}</p>

      <div className="flex gap-4 mt-6">
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600  text-white font-medium rounded-xl shadow hover:opacity-90  transition">
          Buy Now
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductDetailsPage;

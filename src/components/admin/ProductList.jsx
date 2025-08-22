// `use client`;
// import Image from "next/image";
// import Link from 'next/link';

// const ProductList = ({ products, onProductDeleted }) => {
//   const handleDelete = async (productId) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         const res = await fetch(`/api/products/${productId}`, {
//           method: "DELETE",
//         });

//         if (!res.ok) {
//           throw new Error("Failed to delete product");
//         }

//         if (onProductDeleted) {
//           onProductDeleted(productId);
//         }
//       } catch (error) {
//         console.error("Error deleting product:", error);
//         alert("Error deleting product: " + error.message);
//       }
//     }
//   };

//   return (
//     <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//       <table className="w-full text-left text-white">
//         <thead className="bg-gray-700">
//           <tr>
//             <th className="p-4 font-semibold">Title</th>
//             <th className="p-4 font-semibold">Category</th>
//             <th className="p-4 font-semibold">Price</th>
//             <th className="p-4 font-semibold">Image</th>
//             <th className="p-4 font-semibold">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200">
//               <td className="p-4">{product.title}</td>
//               <td className="p-4">{product.category}</td>
//               <td className="p-4 text-yellow-400">{product.price}</td>
//               <td className="p-4">
//                 {product.image && (
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={40}
//                     height={40}
//                     className="rounded-md"
//                   />
//                 )}
//               </td>
//               <td className="p-4">
//                 <button
//                   onClick={() => handleDelete(product._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-200 mr-2"
//                 >
//                   Delete
//                 </button>
//                 <Link href={`/dashboard/edit-product/${product._id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-200">
//                   Edit
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {products.length === 0 && (
//         <p className="p-4 text-center text-gray-400">No products available.</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;


"use client";
import Image from "next/image";
import Link from "next/link";

const ProductList = ({ products, onProductDeleted }) => {
  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Failed to delete product");
        }

        if (onProductDeleted) {
          onProductDeleted(productId);
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product: " + error.message);
      }
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products && products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="relative group bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl shadow-md overflow-hidden border border-gray-100 transition hover:shadow-lg"
          >
            <div className="relative h-64">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <p className="text-yellow-600 font-semibold mb-4">{product.price}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <Link
                  href={`/dashboard/edit-product/${product._id}`}
                  className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition text-center"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-400 p-6">
          No products available.
        </p>
      )}
    </div>
  );
};

export default ProductList;

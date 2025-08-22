`use client`;
import Image from "next/image";

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
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <table className="w-full text-left text-white">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-4 font-semibold">Title</th>
            <th className="p-4 font-semibold">Category</th>
            <th className="p-4 font-semibold">Price</th>
            <th className="p-4 font-semibold">Image</th>
            <th className="p-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200">
              <td className="p-4">{product.title}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4 text-yellow-400">{product.price}</td>
              <td className="p-4">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                )}
              </td>
              <td className="p-4">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-200 mr-2"
                >
                  Delete
                </button>
                <Link href={`/dashboard/edit-product/${product._id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-200">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length === 0 && (
        <p className="p-4 text-center text-gray-400">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;

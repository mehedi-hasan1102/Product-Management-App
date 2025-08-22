import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-900 font-bold text-lg">{product.price}</p>
        <Link href={`/products/${product._id}`} className="mt-4 inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500">
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

import Image from "next/image";

const ProductHighlights = ({ products }) => {
  return (
    <section className="relative mx-auto px-6 py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 transition-colors duration-300 rounded-xl">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-6">
          Our Collection
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-colors duration-300">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Products</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed transition-colors duration-300">
          Discover premium quality products designed to improve your lifestyle and productivity.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products && products.length > 0 ? (
          <>
            {products.map((product) => (
          <div key={product._id} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative h-full bg-white p-1 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{product.title} - {product.price}</span>
              </div>
            </div>
          </div>
        ))}
          </>
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products available.</p>
        )}
      </div>
    </section>
  );
};

export default ProductHighlights;
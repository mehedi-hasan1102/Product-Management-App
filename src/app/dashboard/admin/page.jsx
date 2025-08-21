import ProductHighlights from "@/components/ProductHighlights";
import AddProductForm from "@/app/dashboard/add-product/components/AddProductForm";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

const AdminDashboardPage = async () => {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Admin Dashboard</h1>

        {/* Add New Product Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
          <AddProductForm />
        </section>

        {/* Featured Products Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
          <ProductHighlights products={products} />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

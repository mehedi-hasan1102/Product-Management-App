import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";

async function getProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined. Please set it in your .env.local file.");
  }
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Hero />
      <ProductHighlights products={products} />
    </main>
  );
}

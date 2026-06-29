import { ProductType } from "./types/product";
import ProductTableWrapper from "./ProductTableWrapper";

async function getProducts(): Promise<ProductType[]> {
  const response = await fetch("http://localhost:3000/products/api/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-8">
      <h1 className="mb-4 text-3xl font-bold text-black">List of Products</h1>

      <ProductTableWrapper initialProducts={products} />
    </main>
  );
}

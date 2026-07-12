import { ProductType } from "../../types/product";
import ProductTableWrapper from "./ProductTableWrapper";

async function getProducts(): Promise<ProductType[]> {
  const response = await fetch("http://localhost:3000/api/products", {
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
      <h1 className=" text-5xl font-semibold text-[#94A3B8]">
        List of Products
      </h1>

      <ProductTableWrapper initialProducts={products} />
    </main>
  );
}

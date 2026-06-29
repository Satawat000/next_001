import React from "react";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch Product ID : ${id}`);
  }
  return res.json();
}

async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="p-8 text-black">
      <h1 className="text-3xl font-bold">Product Detail Page</h1>
      <p className="mt-4">Product ID: {id}</p>
      <p className="mt-4">Name : {product.title}</p>
      <p className="mt-4">Name : {product.price}</p>
      <p className="mt-4">Name : {product.category}</p>
    </main>
  );
}

export default ProductDetailPage;

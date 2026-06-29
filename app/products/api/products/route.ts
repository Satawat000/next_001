import { getProducts, createProduct } from "@/services/product";
export async function GET() {
  const products = await getProducts();
  return Response.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const product = await createProduct(body);

  return Response.json(product);
}

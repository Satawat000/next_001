import {
  getProductById,
  updateProduct,
  deleteProduct,
} from "@/services/product";
import { ProductType } from "@/types/product";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;
  const product = await getProductById(Number(id));
  return Response.json(product);
}

export async function PUT(request: Request, { params }: Props) {
  const { id } = await params;
  const body = await request.json();
  const { title, price } = body;
  const updatedProduct = await updateProduct(Number(id), {
    id: Number(id),
    title,
    price,
  } as ProductType);
  return Response.json(updatedProduct);
}

export async function DELETE(request: Request, { params }: Props) {
  const { id } = await params;
  const deletedProduct = await deleteProduct(Number(id));
  return Response.json(deletedProduct);
}

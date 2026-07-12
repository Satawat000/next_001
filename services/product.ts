import { ProductType } from "@/types/product";
import { products } from "@/data/productList";

export async function getProducts() {
  return products;
}

export async function getProductById(id: number) {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }
  return product;
}

export async function createProduct(product: Omit<ProductType, "id">) {
  const nextId =
    products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

  const newProduct: ProductType = {
    ...product,
    id: nextId,
  };

  products.push(newProduct);
  return newProduct;
}

export async function updateProduct(id: number, updatedProduct: ProductType) {
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    throw new Error(`Product with id ${id} not found`);
  }
  products[index] = updatedProduct;
  return updatedProduct;
}

export async function deleteProduct(id: number) {
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    throw new Error(`Product with id ${id} not found`);
  }
  products.splice(index, 1);
  return { message: `Product with id ${id} deleted successfully` };
}

"use client";

import { useState } from "react";
import ProductTable from "./ProductTable";
import { ProductType } from "../../types/product";

type Props = {
  initialProducts: ProductType[];
};

export default function ProductTableWrapper({ initialProducts }: Props) {
  const [products, setProducts] = useState(initialProducts);

  return <ProductTable products={products} setProducts={setProducts} />;
}

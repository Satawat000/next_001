"use client";
import React, { useState } from "react";
import Link from "next/link";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ProductType } from "./types/product";
import EditProductDialog from "./components/EditProductDialog";
import ConfirmDeletedDialog from "./components/ConfirmDeletedDialog";
import AddProductDialog from "./components/AddProductDialog";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

type Props = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function ProductTable({ products, setProducts }: Props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [formData, setFormData] = useState<ProductType | null>(null);
  const handleEdit = (row: ProductType) => {
    setFormData({ ...row });
    setOpenEdit(true);
  };

  const handbleDeleted = (row: ProductType) => {
    setFormData({ ...row });
    setOpenDelete(true);
  };

  const handleAdd = () => {
    setFormData({
      title: "",
      price: 0,
    } as ProductType);
    setOpenAdd(true);
  };

  const callCreateService = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/api/products`, {
        method: "POST",
        headers: {
          "Content-Tye": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const updateProduct = await res.json();
      setProducts((prev) => [...prev, updateProduct]);
      setOpenAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  const callDeleteService = async (id: number) => {
    try {
      const res = await fetch(
        `http://localhost:3000/products/api/products/${id}`,
        {
          method: "DELETE",
        },
      );
      const deletedProduct = await res.json();

      setProducts((prev) => prev.filter((item) => item.id !== id));
      console.log(deletedProduct);
      setOpenDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  const callEditService = async () => {
    if (!formData) return;
    try {
      console.log(formData);
      const res = await fetch(
        `http://localhost:3000/products/api/products/${formData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Tye": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            price: formData.price,
          }),
        },
      );
      const updateProduct = await res.json();

      setProducts((prev) =>
        prev.map((item) => (item.id === updateProduct.id ? formData : item)),
      );

      setOpenEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Name", width: 600 },
    { field: "price", headerName: "Price", width: 150, align: "right" },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: 400,
      sortable: false,
      renderCell: (params) => (
        <div className="flex h-full w-full items-center gap-2">
          <Link
            href={`/products/${params.row.id}`}
            className="flex h-8 flex-1 items-center justify-center rounded bg-blue-500 text-white"
          >
            Show more
          </Link>

          <button
            onClick={() => handleEdit(params.row)}
            className="flex h-8 flex-1 items-center justify-center rounded bg-amber-500 text-white"
          >
            Edit
          </button>
          <button
            onClick={() => handbleDeleted(params.row)}
            className="flex h-8 flex-1 items-center justify-center rounded bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAdd}
          className=" bg-green-500 text-white px-4 py-2 rounded w-32 text-center"
        >
          Add Product
        </button>
      </div>

      <DataGrid
        hideFooterSelectedRowCount
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        sx={{
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-columnHeader:focus-within": {
            outline: "none !important",
          },
        }}
      />

      <EditProductDialog
        formData={formData}
        setFormData={setFormData}
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        onSave={callEditService}
      />
      <ConfirmDeletedDialog
        id={formData?.id || 0}
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onSave={() =>
          formData?.id !== undefined && callDeleteService(formData.id)
        }
      />
      <AddProductDialog
        open={openAdd}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setOpenAdd(false)}
        onSave={callCreateService}
      />
    </div>
  );
}

export default ProductTable;

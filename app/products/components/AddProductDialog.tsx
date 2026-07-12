import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { ProductType } from "../../../types/product";

type Props = {
  open: boolean;
  formData: ProductType | null;
  setFormData: React.Dispatch<React.SetStateAction<ProductType | null>>;
  onClose: () => void;
  onSave: () => void;
};

function AddProductDialog({
  open,
  onClose,
  onSave,
  setFormData,
  formData,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      slotProps={{
        paper: {
          sx: {
            bgcolor: "white",
            borderRadius: 4,
            p: 2,
            width: 600,
          },
        },
      }}
    >
      <DialogTitle>
        <div className="font-semibold border-b-2">Add Product</div>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex gap-2 items-center">
            <label
              htmlFor="title"
              className="block text-sm/6 font-medium items-center"
            >
              Name
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              value={formData?.title ?? ""}
              onChange={(e) =>
                setFormData((prev) =>
                  prev ? { ...prev, title: e.target.value } : null,
                )
              }
            />
          </div>
          <div className="flex gap-2 items-center">
            <label
              htmlFor="title"
              className="block text-sm/6 font-medium items-center"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              step="0.01"
              min="0"
              value={formData?.price ?? 0}
              onChange={(e) =>
                setFormData((prev) =>
                  prev ? { ...prev, price: Number(e.target.value) } : null,
                )
              }
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create New Product
        </button>
      </DialogActions>
    </Dialog>
  );
}

export default AddProductDialog;

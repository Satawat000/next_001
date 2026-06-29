import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { ProductType } from "../types/product";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  formData: ProductType | null;
  setFormData: React.Dispatch<React.SetStateAction<ProductType | null>>;
};

function EditProductDialog({
  open,
  onClose,
  onSave,
  formData,
  setFormData,
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
        <div className="font-semibold border-b-2">Edit Product</div>
      </DialogTitle>
      <DialogContent>
        <div>
          <div>
            <label htmlFor="id" className="block text-sm/6 font-medium  ">
              ID: {formData?.id ?? null}
            </label>
          </div>
          <div className="flex gap-2 py-4">
            <label
              htmlFor="title"
              className="block text-sm/6 font-medium items-center  "
            >
              Name
            </label>
            <input
              id="title"
              type="text"
              value={formData?.title ?? ""}
              onChange={(e) =>
                setFormData((prev) =>
                  prev ? { ...prev, title: e.target.value } : null,
                )
              }
              className="
              p-2
              w-full
              rounded-2xl   
              border-2 border-gray-300
              py-1
              focus:border-red-500
              focus:outline-none
            "
            />
          </div>
          <div className="flex gap-2 py-4">
            <label htmlFor="price" className="block text-sm/6 font-medium  ">
              Price
            </label>
            <input
              id="price"
              type="number"
              value={formData?.price ?? 0}
              onChange={(e) =>
                setFormData((prev) =>
                  prev ? { ...prev, price: Number(e.target.value) } : null,
                )
              }
              className="
              p-2
              w-full
              rounded-2xl   
              border-2 border-gray-300
              py-1
              focus:border-red-500
              focus:outline-none
            "
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditProductDialog;

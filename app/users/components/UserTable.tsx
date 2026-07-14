"use client"
import {useState} from 'react'
import Link from 'next/link';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserType } from "@/types/user";

type Props = {
  users: UserType[];
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
};

function UserTable({ users, setUsers }: Props) {
  const [formData, setFormData] = useState<UserType|null>(null);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "action", headerName: "Action",width: 400,align:"center",headerAlign:"center",sortable: false,
      renderCell: (params)=>(
        <div className="flex h-full w-full items-center gap-2">
          <Link
            href={`/products/${params.row.id}`}
            className="flex h-8 flex-1 items-center justify-center rounded bg-blue-500 text-white"
          >
            Show more
          </Link>

          <button
            //onClick={() => handleEdit(params.row)}
            className="flex h-8 flex-1 items-center justify-center rounded bg-amber-500 text-white"
          >
            Edit
          </button>
          <button
            //onClick={() => handbleDeleted(params.row)}
            className="flex h-8 flex-1 items-center justify-center rounded bg-red-500 text-white"
          >
            Delete
          </button>
        </div>

      ),
    },]

  return (
    <div>
      <DataGrid
        rows={users}
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
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600,
          },
          color: "#fff",
          
          border: "1px solid #1f2022", 

          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none", // header ↔ content
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #1f2022", // content ↔ footer
          },

          "& .MuiDataGrid-cell": {
            borderColor: "#1f2022", 
          },
        }}
        
      />
    </div>
  )
}

export default UserTable

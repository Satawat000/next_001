"use client"
import {useState} from 'react'
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
    { field: "username", headerName: "Username", width: 150 },]

  return (
    <div>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination:{
            paginationModel: { page: 0, pageSize: 5 },
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        
      />
    </div>
  )
}

export default UserTable

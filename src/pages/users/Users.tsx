import DataTable from "../../Components/dataTable/DataTable";
import "./users.scss";
import {
  GridColDef,
} from "@mui/x-data-grid";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../Components/AddUser/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 , type:"number"},
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    editable: true,
    renderCell: (params) => {
      console.log(params.row.img);
      return <img src={params.row.img || "noavatar.png"} />;
    },
  },
  {
    field: "firstName",
    headerName: "Firstname",
    width: 100,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "First name",
    width: 100,
    editable: true,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 110,
    editable: true,
    type:"string"
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    editable: true,
    type:"string"
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 70,
    type:"boolean",
    editable: true,
  },
  /*
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },*/
];

export function Users() {
  const [open,setOpen] = useState(false)

  return (
    <div className="user">
      <div className="info">
        <h1>User</h1>
        <button onClick={() =>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug={"user"} coloms={columns} rows={userRows}/>
      {open && <Add setOpen={setOpen} slug={"User"} columns={columns}/>}
    </div>
  );
}

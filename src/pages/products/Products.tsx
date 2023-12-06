import { useState } from "react";
import DataTable from "../../Components/dataTable/DataTable";
import "./products.scss";
import Add from "../../Components/AddUser/Add";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60, type: "number" },
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
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
    editable: true,
    type: "string",
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 100,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    editable: true,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    editable: true,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 70,
    type: "boolean",
    editable: true,
  },
];

export function Products() {
  const [open, setOpen] = useState(false);

  return (
    <div className="user">
      <div className="info">
        <h1>Product</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug={"product"} coloms={columns} rows={products} />
      {open && <Add setOpen={setOpen} slug={"Product"} columns={columns} />}
    </div>
  );
}

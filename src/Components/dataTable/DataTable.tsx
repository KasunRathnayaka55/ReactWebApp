import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type Props = {
  coloms : GridColDef[],
  rows : object[],
  slug:string,
}

const DataTable = (props:Props) => {

  const handleDelete= (id:number)=>{
    console.log(id+"deleted")
  }

  const acitonColumn:GridColDef = {
    field:"action",
    headerName:"Action",
    width:100,
    renderCell(params) {
      return <div className="action">
        <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg"></img>
        </Link>
        <div className="delete" onClick={()=> handleDelete(params.row.id)}>
          <img src="/delete.svg"></img>
        </div>
      </div>
    },

  }

  return (
    <div className="dataTable">
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.coloms , acitonColumn]}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default DataTable;

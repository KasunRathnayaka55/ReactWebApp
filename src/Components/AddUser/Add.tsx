import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slug: string;
  columns: GridColDef[];
};
const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("item added");
  };

  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((item) => (
              <div className="item">
                <label>{item.headerName}</label>
                <input type={item.type} placeholder={item.field}></input>
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;

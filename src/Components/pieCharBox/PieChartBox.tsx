import { Cell, Pie, PieChart, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h2>Leads By Sourse</h2>
      <div className="chart">
        <PieChart width={220} height={300}>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="options">
        {data.map((item)=>(
            <div className="option" key={item.name}>
                <div className="title">
                    <div className="dot" style={{background: item.color}}></div>
                    <span>{item.name}</span>
                </div>
                <div className="number">{item.value}</div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;

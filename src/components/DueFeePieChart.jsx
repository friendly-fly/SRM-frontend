import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App({ dueData, batch }) {
  console.log(dueData);
  const data = [
    {
      name: "CSE",
      uv: dueData?.CSE ?? 560000,
    },
    {
      name: "ECE",
      uv: dueData?.ECE ?? 760000,
    },
    {
      name: "EE",
      uv: dueData?.EE ?? 56000,
    },
    {
      name: "CE",
      uv: dueData?.CE ?? 12342,
    },
  ];
  return (
    <div className="p-3 shadow-md rounded-md">
      <p className="font-bold text-lg text-slate-600 mb-2">
        Batch: {batch} Due
      </p>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

App.demoUrl =
  "https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68";

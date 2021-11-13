import { Line } from "react-chartjs-2";
const data = {
  labels: ["10 Nov", "00pm", ""],
  datasets: [
    {
      label: "Sales over time",
      data: [0, 0, 0],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function TotalSalesChart() {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

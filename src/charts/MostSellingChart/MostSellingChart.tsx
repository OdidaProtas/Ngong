import { Typography } from "@mui/material";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { CardComponent } from "../../components";
import useStyles from "./MostSellingChart.styles";

const data = {
  // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Products",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function MostSellingChart() {
  const classess = useStyles();
  return (
    <div>
      <div className={classess.root}>
        <div className="header">
          <Typography variant="h6" className="title">
            Most selling Products
          </Typography>
        </div>
        <Doughnut
          options={{ maintainAspectRatio: false }}
          data={data}
        />
      </div>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";
import { CardComponent } from "../../components";
import useStyles from "./RevenueChart.styles";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Your customer Churn rate is 1.2%",
      data: [10, 9, 1, 6, 5, 12, 1, 3, 4].reverse(),
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options: any = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function RevenueChart() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className="header">
          <Typography className="title" variant="h6">
            Revenue
          </Typography>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";
import { Pie } from "react-chartjs-2";
import { CardComponent } from "../../components";
import useStyles from "./CustomerVisitingChart.styles";

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

export default function CustomerVisitingChart() {
  const classes = useStyles();
  return (
    <CardComponent>
      <div className={classes.root}>
        <div>
          <div className="header">
            <Typography className="title" variant="h6">
              Customer Visit and buying
            </Typography>
          </div>
          <Pie data={data} options={options} />
        </div>
      </div>
    </CardComponent>
  );
}

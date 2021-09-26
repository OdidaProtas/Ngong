import { Paper, Typography } from "@mui/material";
import useStyles from "./ComponentChurnRateComponent.styles";
import { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

export default function CustomerChurnRateComponent() {
  const classes = useStyles();

  const [chartData, setChartData] = useState({}) as any;
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);
  const Chart = () => {
    setChartData({
      labels: ["22/03", "23/03", "24/03", "25/03", "26/03", "27/03"],
      datasets: [
        {
          label: "#",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse(),
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
    });
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5">Customer Churn Rate</Typography>
        <div>
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: "THICCNESS SCALE", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ] as any,
              },
            }}
          />
        </div>
      </Paper>
    </div>
  );
}

import { DateComponent } from "..";
import { ChurnRateChart } from "../../charts";
import useStyles from "./ChartsComponent.styles";

export default function ChartsComponent() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dateContainer}>
        <DateComponent />
      </div>
      <ChurnRateChart />
    </div>
  );
}

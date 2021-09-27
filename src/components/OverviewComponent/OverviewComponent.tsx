import { Typography } from "@mui/material";
import { DateComponent, OverviewSummaryComponent } from "..";
import useStyles from "./OverviewComponent.styles";

export default function OverviewComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.dateContainer}>
        <DateComponent />
      </div>
      <Typography variant="h5">Welcome John Doe,</Typography>
      <Typography>Here is your today overview insights</Typography>
      <OverviewSummaryComponent />
    </div>
  );
}

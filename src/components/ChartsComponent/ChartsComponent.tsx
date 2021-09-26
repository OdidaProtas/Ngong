import { Grid } from "@mui/material";
import CustomerChurnRateComponent from "../../charts/CustomerChurnRateComponent/CustomerChurnRateComponent";
import MostSellingComponent from "../../charts/MostSellingComponent/MostSellingComponent";
import useStyles from "./ChartsComponent.styles";

export default function ChartsComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs>
          <CustomerChurnRateComponent />
        </Grid>
        <Grid item xs>
          {/* <MostSellingComponent /> */}
        </Grid>
      </Grid>
    </div>
  );
}

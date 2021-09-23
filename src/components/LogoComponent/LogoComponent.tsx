import { Grid } from "@mui/material";
import logoIcon from "../../assets/images/logo.png";
import useStyles from "./LogoComponent.styles";
export default function LogoComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <img className={classes.icon} src={logoIcon} alt="BizMkononi logo" />
        </Grid>
        <Grid item xs={1}>
          <p className={classes.text}>BizMkononi</p>
        </Grid>
      </Grid>
    </div>
  );
}

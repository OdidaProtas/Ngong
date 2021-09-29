import { Grid } from "@mui/material";
import logoIcon from "../../assets/images/logo.png";
import useStyles from "./LogoComponent.styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LogoComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <LazyLoadImage
            className={classes.icon}
            src={logoIcon}
            alt="BizMkononi logo"
          />
        </Grid>
        <Grid item xs={1}>
          <h5 className={classes.text}>BizMkononi</h5>
        </Grid>
      </Grid>
    </div>
  );
}

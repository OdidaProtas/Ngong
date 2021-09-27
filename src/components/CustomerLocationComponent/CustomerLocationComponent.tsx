import { Paper, Typography } from "@mui/material";
import CardComponent from "../CardComponent/CardComponent";
import useStyles from "./CustomerLocationComponent.styles";
import map from "../../assets/images/map.png"

export default function CustomerLocationComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardComponent>
        <Typography variant="h6" className={classes.title}>
          Customer Location
        </Typography>
        <img src={map} className={classes.dummyMap} alt="" />
      </CardComponent>
    </div>
  );
}

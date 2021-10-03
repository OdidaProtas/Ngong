import { Typography } from "@mui/material";
import useStyles from "./BusinessItemComponent.styles";

import { useHistory } from "react-router";

export default function BusinessItemComponent() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root} onClick={() => history.push("/business/1")}>
      <Typography variant="h6">Business Name</Typography>
      <Typography variant="body1" className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <div className={classes.actions}>

      </div>
    </div>
  );
}

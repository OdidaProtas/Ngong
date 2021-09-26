import { Paper, Typography } from "@mui/material";
import useStyles from "./CustomerLocationComponent.styles";

export default function CustomerLocationComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant="h6" className={classes.title}>
          Customer Location
        </Typography>
      </Paper>
    </div>
  );
}

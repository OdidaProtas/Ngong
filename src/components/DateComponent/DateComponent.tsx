import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import useStyles from "./DateComponent.styles";
import Typography from "@mui/material/Typography/Typography";

export default function DateComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.date}>
        <CalendarTodayIcon className={classes.icon} fontSize="small" />
        <Typography variant="body1">Sept 30, 2021</Typography>
      </div>
    </div>
  );
}

import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./CardComponent.styles";

export default function CardComponent(props: any) {
  const classes = useStyles();
  return <div className="cardShadow">{props.children}</div>;
}

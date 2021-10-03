import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import useStyles from "./CallToActionComponent.styles";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";

const cards = [
  {
    title: "Add Your Products Information",
    icon: <InboxIcon fontSize="large" />,
    btn: "Add Products",
  },
  {
    title: "Add Your Existing Customers",
    icon: <PeopleIcon fontSize="large" />,
    btn: "Add Customers",
  },
];

interface CardItemsInterface {
  item: any;
}

const CardItems = ({ item }: CardItemsInterface) => {
  const { icon, title, btn } = item;
  const classes = useStyles();
  return (
    <div className={classes.cardItem}>
      {icon}
      <Typography className={classes.title}>{title}</Typography>
      <Button variant="contained" size="small">
        {btn}
      </Button>
    </div>
  );
};

export default function CallToActionComponent() {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {cards.map((card: any, idx: number) => (
            <Grid item xs key={idx}>
              <>
                <CardItems item={card} />
              </>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

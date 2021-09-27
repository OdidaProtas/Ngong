import { Grid, Typography } from "@mui/material";
import useStyles from "./OverviewSummaryComponent.styles";

const items = [
  { title: "Total Revenue", value: "$4000" },
  { title: "Total Orders", value: "240" },
  { title: "Customer Churn Rate", value: "1.2%" },
  { title: "Repeat Purchase Rate", value: "8.5%" },
];

interface ItemComponmentInterface {
  item: any;
}

const ItemComponment = ({
  item: { value, title },
}: ItemComponmentInterface) => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <Typography variant="h5">{value}</Typography>
      <Typography>{title}</Typography>
    </div>
  );
};

export default function OverviewSummaryComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {items.map((item: any, idx: number) => (
          <Grid item xs={12} lg={3} md={3} key={idx}>
            <ItemComponment item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

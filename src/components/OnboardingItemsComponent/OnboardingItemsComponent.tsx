import { Grid, Typography } from "@mui/material";
import useStyles from "./OnboardingItems.styles";

interface OnboardingItemsInterface {
  item: {
    icon: any;
    text: string;
  };
}

export default function OnboardingItemsComponent({
  item: { icon, text },
}: OnboardingItemsInterface) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={1}>
          <img className={classes.icon} src={icon} alt={text} />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="body1" className={classes.text}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

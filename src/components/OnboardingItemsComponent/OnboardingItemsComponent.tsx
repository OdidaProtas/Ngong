import { Grid } from "@mui/material";
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
    <div>
      <Grid container>
        <Grid item xs={2}>
          <img className={classes.icon} src={icon} alt={text} />
        </Grid>
        <Grid item xs={6}>
          <p>{text}</p>
        </Grid>
      </Grid>
    </div>
  );
}

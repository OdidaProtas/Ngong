import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import startuplife from "../../assets/images/startup.svg";
import PeopleIcon from "@mui/icons-material/People";
import InboxIcon from "@mui/icons-material/Inbox";

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
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 200,
      }}
    >
      {icon}
      <Typography
        style={{ fontWeight: "bold", marginTop: 36, marginBottom: 20 }}
        variant="body1"
      >
        {title}
      </Typography>
      <Button variant="contained" size="small">
        {btn}
      </Button>
    </div>
  );
};

export default function LandingPageComponent() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CalendarTodayIcon fontSize="small" />
        <Typography variant="body1">August 26, 2021</Typography>
      </div>
      <Grid container>
        <Grid item xs>
          <Typography style={{ marginTop: 40, marginLeft: 50 }} variant="h5">
            Welcome John Doe,
          </Typography>
          <Typography variant="body1" style={{ marginLeft: 60, marginTop: 19 }}>
            To set up your business effectively and smoothly,
          </Typography>
        </Grid>
        <Grid item xs>
          <img style={{ height: 280, width: 280 }} src={startuplife} alt="" />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", paddingLeft:80 }}>
        <Grid container>
          {cards.map((item: any, idx: number) => (
            <Grid item xs>
              <CardItems item={item} key={idx} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import startuplife from "../../assets/images/startup.svg";
import PeopleIcon from "@mui/icons-material/People";
import InboxIcon from "@mui/icons-material/Inbox";
import useStyles from "./LandingPageComponent.styles";
import { WelcomeComponent } from "..";
import DateComponent from "../DateComponent/DateComponent";

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
  return <div></div>;
};

export default function LandingPageComponent() {
  const classes = useStyles();
  return (
    <div>
      <DateComponent />
      <WelcomeComponent />
    </div>
  );
}

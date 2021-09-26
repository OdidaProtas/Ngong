import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import startuplife from "../../assets/images/startup.svg";
import useStyles from "./LandingPageComponent.styles";
import { WelcomeComponent } from "..";
import DateComponent from "../DateComponent/DateComponent";



export default function LandingPageComponent() {
  const classes = useStyles();
  return (
    <div>
      <DateComponent />
      <WelcomeComponent />
    </div>
  );
}

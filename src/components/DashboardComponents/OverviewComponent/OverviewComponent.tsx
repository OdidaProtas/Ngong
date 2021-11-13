import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DateSalutationComponent } from "../../SharedComponents";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TotalSales from "./OverviewCards/TotalSales";
import OnlineStoreSessions from "./OverviewCards/OnlineStoreSessions";
import ReturnCustomerRate from "./OverviewCards/ReturnCustomerRate";
import ConversionRate from "./OverviewCards/ConversionRate";
import AverageOrderValue from "./OverviewCards/AverageOrderValue";
import TotalOrders from "./OverviewCards/TotalOrders";
import ProductsByUnits from "./OverviewCards/ProductsByUnits";
import OnlineStoreSessionsByLocation from "./OverviewCards/OnlineStoresSessionsByLocation";
import OnlineStoreSessionsByDevice from "./OverviewCards/OnlineStoreSessionByDeviceType";
import SessionsByTrafficSource from "./OverviewCards/SessionsByTrafficSource";
import SalesByTrafficSource from "./OverviewCards/SalesByTrafficSource";
import SalesBySocialSource from "./OverviewCards/SalesBySocialSource";
import LandingPagesBySessions from "./OverviewCards/LandingPagesBySessions";
import SalesAttributedToMarketing from "./OverviewCards/SalesAttributedToMarketing";
import TopRefs from "./OverviewCards/TopReferrersBySession";

const options = [
  { name: "totalSales", Component: TotalSales },
  { name: "onlineStoreSessions", Component: OnlineStoreSessions },
  { name: "onlineStoreSessions", Component: ReturnCustomerRate },
  { name: "onlineStoreSessions", Component: ConversionRate },
  { name: "onlineStoreSessions", Component: AverageOrderValue },
  { name: "onlineStoreSessions", Component: TotalOrders },
  { name: "onlineStoreSessions", Component: ProductsByUnits },
  { name: "onlineStoreSessions", Component: OnlineStoreSessionsByLocation },
  { name: "onlineStoreSessions", Component: OnlineStoreSessionsByDevice },
  { name: "onlineStoreSessions", Component: OnlineStoreSessionsByDevice },
  { name: "onlineStoreSessions", Component: SessionsByTrafficSource },
  { name: "onlineStoreSessions", Component: SalesByTrafficSource },
  { name: "onlineStoreSessions", Component: SalesBySocialSource },
  { name: "onlineStoreSessions", Component: LandingPagesBySessions },
  { name: "onlineStoreSessions", Component: SalesAttributedToMarketing },
  { name: "onlineStoreSessions", Component: TopRefs },
];

export default function OverviewComponent() {
  return (
    <div>
      <Typography>Overview dashboard</Typography>
      <Button
        sx={{ my: 1, textTransform: "none" }}
        size="small"
        color="inherit"
        variant="outlined"
        startIcon={<CalendarTodayIcon />}
      >
        Today
      </Button>
      <Typography sx={{ my: 1, color: "text.secondary" }}>
        compared to 9 Nov 2021
      </Typography>
      <Divider />
      <Grid container spacing={1}>
        {options.map(({ name, Component }, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <div style={{ height: "100%" }}>
              <Component></Component>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

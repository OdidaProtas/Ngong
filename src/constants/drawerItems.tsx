import InsightsIcon from "@mui/icons-material/Insights";
import StoreIcon from "@mui/icons-material/Store";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const drawerItems = [
  {
    title: "Insights",
    icon: <InsightsIcon />,
    items: [
      { title: "Overview" },
      { title: "Sales Insights" },
      { title: "Customer Insights" },
      { title: "Churn Rate Insights" },
      { title: "Revenue Insights" },
    ],
  },
  {
    title: "Businesses",
    icon: <StoreIcon />,
    items: [],
  },
];

const sections = [
  { title: "Sales", icon: <ReceiptIcon />, items: [] },
  { title: "Supplies", icon: <KitchenIcon />, items: [] },
  { title: "Customers", icon: <PeopleIcon />, items: [] },
  { title: "Suppliers", icon: <DirectionsWalkIcon />, items: [] },
  { title: "Products", icon: <AllInboxIcon />, items: [] },
  { title: "Employees", icon: <AccountBoxIcon />, items: [] },
];

export { drawerItems, sections };

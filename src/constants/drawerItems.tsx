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
    icon: <InsightsIcon fontSize="small" />,
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
    icon: <StoreIcon fontSize="small" />,
    items: [
      { title: "My Business" },
      { title: "New Business" },
    ],
  },
];

const sections = [
  { title: "Sales", icon: <ReceiptIcon fontSize="small" />, items: [] },
  { title: "Supplies", icon: <KitchenIcon fontSize="small" />, items: [] },
  { title: "Customers", icon: <PeopleIcon fontSize="small" />, items: [] },
  {
    title: "Suppliers",
    icon: <DirectionsWalkIcon fontSize="small" />,
    items: [],
  },
  { title: "Products", icon: <AllInboxIcon fontSize="small" />, items: [] },
  { title: "Employees", icon: <AccountBoxIcon fontSize="small" />, items: [] },
];

export { drawerItems, sections };

import InsightsIcon from "@mui/icons-material/Insights";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SummarizeIcon from "@mui/icons-material/Summarize";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PeopleIcon from "@mui/icons-material/People";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const analyticsItems: any = [
  {
    title: "Overview",
    icon: SummarizeIcon,
    path: "overview",
  },
  {
    title: "Insights",
    icon: InsightsIcon,
    path: "insights",
  },
  {
    title: "Reports",
    icon: AssessmentIcon,
    path: "reports",
  },
];

const drawerItems: any = [
  {
    title: "Home",
    icon: HomeRoundedIcon,
    path: "",
  },
  {
    title: "Products",
    icon: LocalOfferIcon,
    path: "products",
  },
  {
    title: "Orders",
    icon: MoveToInboxIcon,
    path: "orders",
  },
  {
    title: "Customers",
    icon: PeopleIcon,
    path: "customers",
  },
  {
    title: "Marketing",
    icon: VolumeUpIcon,
    path: "marketing",
  },
  {
    title: "Discounts",
    icon: LoyaltyIcon,
    path: "discounts",
  },
];

export { analyticsItems, drawerItems };

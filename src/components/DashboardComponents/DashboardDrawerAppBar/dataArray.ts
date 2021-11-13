import InsightsIcon from "@mui/icons-material/Insights";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PeopleIcon from "@mui/icons-material/People";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PublicIcon from '@mui/icons-material/Public';

const analyticsItems: any = [
  {
    title: "Analytics",
    icon: InsightsIcon,
    path: "overview",
  },
  {
    title: "Reports",
    icon: AssessmentIcon,
    path: "insights",
  },
  {
    title: "Live view",
    icon: PublicIcon,
    path: "reports",
  },
];

const drawerItems: any = [
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

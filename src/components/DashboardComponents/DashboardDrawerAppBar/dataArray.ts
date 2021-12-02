import InsightsIcon from "@mui/icons-material/Insights";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PeopleIcon from "@mui/icons-material/People";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PublicIcon from "@mui/icons-material/Public";

const analyticsItems: any = [
  {
    title: "Analytics",
    icon: InsightsIcon,
    path: "overview",
    items: [],
  },
  {
    title: "Reports",
    icon: AssessmentIcon,
    path: "insights",
    items: [],
  },
  {
    title: "Live view",
    icon: PublicIcon,
    path: "reports",
    items: [],
  },
];

const drawerItems: any = [
  {
    title: "Products",
    icon: LocalOfferIcon,
    path: "products",
    items: [
      { title: "All products", path: "" },
      { title: "Inventory", path: "inventory" },
      { title: "Transfers", path: "transfers" },
      { title: "Collections", path: "collections" },
      { title: "Gift cards", path: "gift-cards" },
    ],
  },
  {
    title: "Orders",
    icon: MoveToInboxIcon,
    path: "orders",
    items: [
      { title: "Orders", path: "" },
      { title: "Draft orders", path: "drafts" },
      { title: "Abandoned checkouts", path: "abandoned" },
    ],
  },
  {
    title: "Customers",
    icon: PeopleIcon,
    path: "customers",
    items: [
    ],
  },
  {
    title: "Marketing",
    icon: VolumeUpIcon,
    path: "marketing",
    items: [
      { title: "Marketing", path: "" },
      { title: "Campaigns", path: "" },
      { title: "Automation", path: "" },
    ],
  },
  {
    title: "Discounts",
    icon: LoyaltyIcon,
    path: "discounts",
    items: [
      { title: "Discounts", path: "" },
      { title: "Automatic discounts", path: "auto" },
    ],
  },
];

export { analyticsItems, drawerItems };
  
import InsightsIcon from "@mui/icons-material/Insights";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LinkIcon from '@mui/icons-material/Link';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PeopleIcon from '@mui/icons-material/People';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const analyticsItems: any = [
  {
    title: "Overview",
    icon: SummarizeIcon,
  },
  {
    title: "Insights",
    icon: InsightsIcon,
  },
  {
    title: "Reports",
    icon: AssessmentIcon,
  },
];

const drawerItems: any = [
  {
    title: "Products",
    icon: LocalOfferIcon,
  },
  {
    title: "Orders",
    icon: MoveToInboxIcon,
  },
  {
    title: "Customers",
    icon: PeopleIcon,
  },
  {
    title: "Marketing",
    icon: VolumeUpIcon,
  },
  {
    title: "Discounts",
    icon: LoyaltyIcon,
  },
  {
    title: "Affiliates",
    icon: LinkIcon,
  },
];

export { analyticsItems, drawerItems };

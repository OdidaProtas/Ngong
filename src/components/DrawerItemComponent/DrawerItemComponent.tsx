import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../constants/Themes/colors";
import useStyles from "./DrawerItemComponent.styles";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";

interface DrawerItemComponentInterface {
  item: any;
}

export default function DrawerItemComponent({
  item,
}: DrawerItemComponentInterface) {
  const { title, icon, items } = item;
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "3px" }}>
      <Accordion
        elevation={0}
        disableGutters
        style={{ backgroundColor: colors.accent }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        </AccordionSummary>
        <AccordionDetails>
          {items.map((li: any, idx: number) => (
            <Typography
              key={idx}
              variant="body2"
              className={classes.subListItems}
            >
              {li.title}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

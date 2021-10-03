import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../constants/Themes/colors";
import useStyles from "./DrawerItemComponent.styles";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useHistory, useRouteMatch } from "react-router";

interface DrawerItemComponentInterface {
  item: any;
}

export default function DrawerItemComponent({
  item,
}: DrawerItemComponentInterface) {
  const { title, icon, items } = item;
  const classes = useStyles();
  const history = useHistory();

  const handleNavigation = (to: string) => {
    history.push(to);
  };

  return (
    <div>
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
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        </AccordionSummary>
        <AccordionDetails>
          {items.map((li: any, idx: number) => {
            const { title, to } = li;
            return (
              <Typography
                key={idx}
                variant="body2"
                onClick={() => handleNavigation(to)}
                className={classes.subListItems}
              >
                {title}
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

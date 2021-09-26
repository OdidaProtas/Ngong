import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../constants/Themes/colors";
import useStyles from "./DrawerItemComponent.styles";

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
          <div style={{ marginRight: "6px" }}>{icon}</div>
          <Typography className={classes.title} variant="caption">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {items.map((li: any, idx: number) => (
            <li className={classes.listItems} key={idx}>
              <Typography variant="caption">{li.title}</Typography>
            </li>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

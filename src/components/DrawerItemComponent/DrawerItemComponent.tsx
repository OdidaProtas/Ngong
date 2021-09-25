import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../constants/Themes/colors";

interface DrawerItemComponentInterface {
  item: any;
}

export default function DrawerItemComponent({
  item,
}: DrawerItemComponentInterface) {
  const { title, icon, items } = item;
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
          <Typography variant="body2">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {items.map((li: any, idx: number) => (
            <li key={idx}>{li.title}</li>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

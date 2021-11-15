import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Field } from "formik";

export default function NavItem({ data, item }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 3,
          pt: 2.5,
          pb: open ? 0 : 2.5,
          "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
        }}
      >
        <ListItemText
          primary={item}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: "medium",
            lineHeight: "20px",
            mb: "2px",
          }}
          secondary="Welcome, Navbar, About "
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: "16px",
            color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
          }}
          sx={{ my: 0 }}
        />
        <IconButton>
          <KeyboardArrowDown
            sx={{
              mr: -1,
              opacity: 0,
              transform: open ? "rotate(-180deg)" : "rotate(0)",
              transition: "0.2s",
            }}
          />
        </IconButton>
      </ListItemButton>
      {open &&
        data.map(({ label }) => (
          <Accordion elevation={0} key={label}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Field name="welcomeText">
                {({ field }) => (
                  <TextField
                    value={field.value}
                    onChange={field.onChange(field.name)}
                    size="small"
                    fullWidth
                  />
                )}
              </Field>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}

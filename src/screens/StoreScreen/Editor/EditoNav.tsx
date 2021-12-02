import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import { useHistory, useParams } from "react-router";
import { LogoComponent } from "../../../components/SharedComponents";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NavItem from "./NavItem";

const data = [
  { label: "Welcome" },
  { label: "Navbar" },
  { label: "About" },
  { label: "Featured" },
  { label: "Collections" },
  { label: "Video" },
  { label: "Quick links" },
  { label: "Action button" },
  { label: "Subscription" },
  { label: "Footer" },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function EditorNav() {
  const [open, setOpen] = React.useState(true);
  const { push } = useHistory();
  const { id }: any = useParams();
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            // primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "purple" },
          },
        })}
      >
        <Paper elevation={0} sx={{ width: 256, borderRadius: 0, minWidth:"100vh" }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton>
              <ListItemText
                sx={{ my: 0 }}
                primary="Store name"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
              {["Lading Page", "Catalog", "About", "Contact"].map((e, idx) => (
                <NavItem data={data} item={e} key={idx} />
              ))}
            </Box>
            <Box>
              <Divider sx={{ my: 2 }} />
              <ListItem button>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Theme settings"></ListItemText>
              </ListItem>
              <ListItem button onClick={() => push(`/admin/${id}`)}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Admin site"></ListItemText>
              </ListItem>
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}

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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NavigationIcon from "@mui/icons-material/Navigation";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookIcon from "@mui/icons-material/Book";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import { useHistory, useParams } from "react-router";
import { LogoComponent } from "../../../components/SharedComponents";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const data = [
  { icon: <FormatPaintIcon />, label: "Themes" },
  { icon: <BookIcon />, label: "Blog Posts" },
  { icon: <MenuBookIcon />, label: "Pages" },
  { icon: <NavigationIcon />, label: "Navigation" },
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

export default function StoreOverviewNav() {
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
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <div style={{ textAlign: "center" }}>
            <LogoComponent />
          </div>
          <FireNav component="nav" disablePadding>
            <ListItemButton>
              {/* <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon> */}
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
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>{/* <Home color="primary" /> */}</ListItemIcon>
                <ListItemText
                  primary="Customize store"
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "medium",
                    variant: "body2",
                  }}
                />
              </ListItemButton>
              <Tooltip title="Preview store">
                <IconButton
                  size="small"
                  sx={{
                    "& svg": {
                      color: "rgba(255,255,255,0.8)",
                      transition: "0.2s",
                      transform: "translateX(0) rotate(0)",
                    },
                    "&:hover, &:focus": {
                      bgcolor: "unset",
                      "& svg:first-of-type": {
                        transform: "translateX(-4px) rotate(-20deg)",
                      },
                      "& svg:last-of-type": {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      height: "80%",
                      display: "block",
                      left: 0,
                      width: "1px",
                      bgcolor: "divider",
                    },
                  } as any}
                >
                  <VisibilityIcon />
                  <ArrowRight
                    sx={{ position: "absolute", right: 4, opacity: 0 } as any}
                  />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
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
                  primary="Pages"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Themes, Blog Posts, Pages, Navigation"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Divider sx={{ my: 2 }} />
            <ListItem button onClick={() => push(`/admin/${id}`)}>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Admin site"></ListItemText>
            </ListItem>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}

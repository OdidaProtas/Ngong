import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { LogoComponent } from "../../SharedComponents/";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import {
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
} from "react-router";

import { analyticsItems, drawerItems } from "./dataArray";
import { StateContext } from "../../../state/appstate";
import AccountMenu from "../../SharedComponents/AccountMenu/AccountMenu";
import Container from "@mui/material/Container";
import { AuthContext } from "../../../state";
import useMyStores from "../../../hooks/stores/useMyStores";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: any;
}

export default function DashboardDrawerAppBar(props: Props) {
  const { window, children } = props;
  let { url, path } = useRouteMatch();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { myStores } = React.useContext(StateContext) as any;
  const {
    authState: {
      user: { id },
    },
  }: any = React.useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const params: any = useParams();

  const store = myStores?.filter((st: any) => st.id === params.id)[0];

  const handleNavigation = (newU: string) => {
    if (newU === "") {
      history.push(`/admin/${store.id}`);
    } else {
      history.push(`${url}/${newU}`);
    }
    handleDrawerToggle();
  };

  const { pathname } = useLocation();

  useMyStores();

  console.log(path);

  const drawer = (
    <div style={{ backgroundColor: "#e9ecef", minHeight: "100%" }}>
      <Toolbar>
        <LogoComponent />
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          // selected={path === "/admin/:id"}
          onClick={() => handleNavigation("")}
          button
        >
          <ListItemIcon>{<HomeRoundedIcon />}</ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        {drawerItems.map((item: any, index: number) => {
          return (
            <ListItem
              onClick={() => handleNavigation(item.path)}
              button
              key={index}
              selected={pathname.includes(item.path)}
            >
              <ListItemIcon>{<item.icon />}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {analyticsItems.map((item: any, index: number) => (
          <ListItem
            onClick={() => handleNavigation(item.path)}
            button
            key={index}
            selected={pathname.includes(item.path)}
          >
            <ListItemIcon>{<item.icon />}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sales Channels"].map((text, index) => (
          <ListItem
            onClick={() => handleNavigation("sales-channels")}
            button
            key={text}
            selected={pathname.includes("sales-channels")}
          >
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Settings"].map((text, index) => (
          <ListItem
            onClick={() => handleNavigation("settings")}
            button
            key={text}
            selected={pathname.includes("settings")}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {myStores ? store?.name : ""}
          </Typography>
          <div style={{ position: "absolute", right: 20 } as any}>
            <AccountMenu />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#e9ecef",
          minHeight: "100vh",
          pt: 3,
        }}
      >
        <Toolbar />
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

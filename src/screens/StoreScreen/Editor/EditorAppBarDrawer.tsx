import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import {
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
} from "react-router";

import { StateContext } from "../../../state/appstate";
import Container from "@mui/material/Container";
import { AuthContext } from "../../../state";
import useMyStores from "../../../hooks/stores/useMyStores";
import AccountMenu from "../../../components/SharedComponents/AccountMenu/AccountMenu";
import EditorNav from "./EditoNav";

const drawerWidth = 260;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: any;
}

export default function EditorAppBarDrawer(props: any) {
  const { window, children, handleModeChange } = props;
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
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
          <div style={styles}>
            <IconButton onClick={() => handleModeChange("desktop")}>
              <DesktopWindowsIcon />
            </IconButton>
            <IconButton onClick={() => handleModeChange("mobile")}>
              <PhoneAndroidIcon />
            </IconButton>
            {/* <IconButton>
              <VisibilityIcon />
            </IconButton> */}
            {/* <IconButton>
              <CodeIcon />
            </IconButton> */}
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
          <EditorNav />
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
          <EditorNav />
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

const styles: any = {
  position: "absolute" as any,
  right: "0",
  display: "flex",
};

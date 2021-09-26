import Toolbar from "@mui/material/Toolbar/Toolbar";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box/Box";
import { DrawerItemComponent } from "..";
import colors from "../../constants/Themes/colors";
import { drawerItems, sections } from "../../constants/drawerItems";
import { Divider, Typography } from "@mui/material";
import LogoComponent from "../LogoComponent/LogoComponent";
import useStyles from "./DrawerComponent.styles";

const DrawerContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <LogoComponent />
      </div>
      <div className={classes.drawerItemsContainer}>
        {drawerItems.map((item: any, idx: number) => {
          return <DrawerItemComponent key={idx} item={item} />;
        })}
      </div>

      <Divider />
      <div>
        <Typography
          style={{ fontFamily: "Poppins", margin: "6px" }}
          variant="body2"
        >
          Section
        </Typography>
        {sections.map((item: any, idx: number) => {
          return <DrawerItemComponent key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

interface DrawerComponentInterface {
  container: any;
  mobileOpen: any;
  handleDrawerToggle: any;
  drawerWidth: any;
}

export default function DrawerComponent({
  container,
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
}: DrawerComponentInterface) {
  return (
    <>
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
          <DrawerContainer />
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
          <DrawerContainer />
        </Drawer>
      </Box>
    </>
  );
}

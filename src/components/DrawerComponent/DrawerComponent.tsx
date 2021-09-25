import Toolbar from "@mui/material/Toolbar/Toolbar";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box/Box";
import { DrawerItemComponent } from "..";
import colors from "../../constants/Themes/colors";
import { drawerItems, sections } from "../../constants/drawerItems";
import { Divider, Typography } from "@mui/material";

const drawer = (
  <div
    style={{
      backgroundColor: colors.accent,
      minHeight: "100vh",
      padding: "3px",
      overflow:"hidden"
    }}
  >
    <Toolbar />
    {drawerItems.map((item: any, idx: number) => {
      return <DrawerItemComponent key={idx} item={item} />;
    })}
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
    </>
  );
}

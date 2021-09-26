import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {
  NavbarComponent,
  DrawerComponent,
  LandingPageComponent,
} from "../../components";
import { Container } from "@mui/material";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function HomeScreen(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <DrawerComponent
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>{/* <LandingPageComponent /> */}</Container>
        {/* content goes here */}
      </Box>
    </Box>
  );
}

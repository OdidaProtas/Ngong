import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useStyles from "./NavbarComponent.styles";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import LayersIcon from "@mui/icons-material/Layers";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box/Box";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

export default function NavbarComponent() {
  const handleDrawerToggle = () => {};
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="transparent"
        elevation={0}
        className={classes.appBar}
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
            Bootique Shop
          </Typography>
          <div
            style={{ textAlign: "center", marginLeft: "60px", width: "50%" }}
          >
            <SearchBox />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <LayersIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <LayersIcon />
            </IconButton>
          </Box>
          <Avatar>H</Avatar>
          <div>
            <Typography>John Doe</Typography>
            <Typography variant="caption">Admin</Typography>
          </div>
          <div>
            <ArrowDropDownIcon />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

const SearchBox = () => {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Search for insights, sales, customers"
      variant="filled"
      style={{ borderRadius: "24px" }}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  );
};

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useStyles from "./NavbarComponent.styles";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box/Box";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 240;

interface NavbarComponentInterface {
  handleDrawerToggle: any;
}

export default function NavbarComponent({
  handleDrawerToggle,
}: NavbarComponentInterface) {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
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
          <Typography
            className={classes.shopName}
            variant="h6"
            noWrap
            component="div"
          >
            Bootique Shop
          </Typography>
          <div className={classes.searchBarContainer}>
            <SearchBox />
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <div className={classes.desktopMenu}>
              <NavItems />
            </div>
          </Box>
          <Box sx={{ display: { xs: "block", md: "block", lg: "none" } }}>
            <div className={classes.mobileMenu}>
              <MobileMenu />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const SearchBox = () => {
  const classes = useStyles();
  return (
    <div className="TextField-without-border-radius">
      <TextField
        id="input-with-icon-textfield"
        label="Search for insights, sales, customers"
        variant="filled"
        size="small"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
          className: classes.searchBar,
        }}
      />
    </div>
  );
};

const NavItems = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <IconButton>
            <AutoAwesomeMotionIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "6px" }}>
            <Avatar>J</Avatar>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <Typography variant="body1">John Doe</Typography>
              <ArrowDropDownIcon fontSize="small" />
            </div>
            <Typography variant="caption">Admin</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div style={{ padding: "6px" }}>
          <NavItems />
        </div>
      </Menu>
    </div>
  );
};

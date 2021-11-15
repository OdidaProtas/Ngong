import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { AuthContext, axiosInstance } from "../../../state";
import { useHistory, useParams, useRouteMatch } from "react-router";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { StateContext } from "../../../state/appstate";
import useMyStores from "../../../hooks/stores/useMyStores";
import OfflinePrompt from "./OfflinePrompt";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    signOut,
    authState: { user, loaded },
  }: any = React.useContext(AuthContext);

  const sitati: any = React.useContext(StateContext);

  const history = useHistory();

  if (!loaded || !user) return <Avatar />;

  const { firstName, lastName, email, id }: any = user;

  const handleSignIn = () => {
    signOut();
    sitati.stateDispatch({ type: "ADD_MY_STORES", payload: null });
    history.push("/logout");
  };

  useMyStores();

  React.useEffect(() => {
    if (!sitati.myStores) {
      sitati.stateDispatch({ type: "FETCH_STORES" });
    }
  }, []);

  return (
    <React.Fragment>
      <OfflinePrompt />
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar
              color="success"
              sx={{ width: 36, height: 36, bgcolor: "orange" }}
            >
              {firstName[0]}
              {lastName[0]}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        } as any}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ width: 42, height: 42 }} />
          <Box>
            <Typography color="secondary" variant="h6">
              {firstName} {lastName}
            </Typography>
            <Typography color="secondary" variant="body2">
              {email}
            </Typography>
          </Box>
        </MenuItem>
        <Divider> </Divider>
        {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
        <MenuItem onClick={() => history.push(`/store-login/${id}`)}>
          <Avatar>
            <StorefrontIcon />
          </Avatar>
          My Stores
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Account Settings
        </MenuItem>
        <MenuItem onClick={() => handleSignIn()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

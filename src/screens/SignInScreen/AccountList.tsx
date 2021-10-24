import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import PlusIcon from "@mui/icons-material/Add";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Typography from "@mui/material/Typography/Typography";
import Divider from "@mui/material/Divider";
import { useHistory } from "react-router";

export default function AccountList() {
  const history = useHistory()
  return (
    <div>
      <Typography sx={{ mt: 5 }} variant="h5">
        Choose account to continue
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem onClick={()=>history.push("/signin/verify")} button>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Odida Brian"
            secondary="bryodiidah@gmail.com"
          />
        </ListItem>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <ListItem onClick={()=>history.push("/signin")} button>
          <ListItemAvatar>
            <Avatar>
              <PlusIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </div>
  );
}

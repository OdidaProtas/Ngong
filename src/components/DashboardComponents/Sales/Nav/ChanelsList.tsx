import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import StoreIcon from "@mui/icons-material/Store";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { useHistory, useParams } from "react-router";

export default function ChanelsList() {
  const [checked, setChecked] = React.useState(["wifi"]);

  const { push } = useHistory();
  const { id }: any = useParams();

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        subheader={<ListSubheader>Default</ListSubheader>}
      >
        <ListItem button onClick={() => push(`/store-theme/${id}`)}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-wifi"
            primary="Online store"
            secondary="Create a unique experience for your store"
          />
          <VisibilityIcon />
        </ListItem>
      </List>
      <List
        sx={{ width: "100%", bgcolor: "background.paper", mt: 2 }}
        subheader={<ListSubheader>Recommended</ListSubheader>}
      >
        <ListItem button>
          <ListItemIcon>
            <PointOfSaleIcon />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-wifi"
            primary="Point of sale"
            secondary="Manage sales"
          />
          <Switch
            edge="end"
            color="secondary"
            onChange={handleToggle("bluetooth")}
            checked={checked.indexOf("bluetooth") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText
            secondary="Get your products listed on..."
            id="switch-list-label-bluetooth"
            primary="Tokea Marketplace"
          />
          <Switch
            edge="end"
            color="secondary"
            onChange={handleToggle("bluetooth")}
            checked={checked.indexOf("bluetooth") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
      </List>
    </div>
  );
}

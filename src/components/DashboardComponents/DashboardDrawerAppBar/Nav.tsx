import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExploreIcon from "@mui/icons-material/Explore";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { useHistory, useRouteMatch } from "react-router";
import { drawerItems } from "./dataArray";
const NavOptions = [
  { name: "Nav group 1", Icon: AdminPanelSettingsIcon },
  { name: "Nav group 2", Icon: ExploreIcon },
  { name: "Nav group 3", Icon: DonutLargeIcon },
];

export default function Nav({ options, toggle }) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-l ist-subheader"
    >
      {options.map((o: any, i: number) => (
        <NavItem
          items={o.items}
          path={o.path}
          Icon={o.icon}
          name={o.title}
          key={i}
          toggle={toggle}
        />
      ))}
    </List>
  );
}

const NavItem = ({ name, Icon, path, items, toggle }: any) => {
  const [open, setOpen] = React.useState(false);

  const { push } = useHistory();

  const { url } = useRouteMatch();

  const handleClick = () => {
    if (!open) push(`${url}/${path}`);
    setOpen(!open);
    // toggle();
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? (
          <>{items.length > 0 ? <ExpandLess /> : null}</>
        ) : (
          <>{items.length > 0 ? <ExpandMore /> : null}</>
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((e: any, idx: number) => (
            <ListItemButton
              selected={(open && e.path === "") || path.includes(e.path)}
              onClick={() => {
                push(`${url}/${path}/${e.path}`);
                toggle()
              }}
              key={idx}
              sx={{ pl: 9 }}
            >
              <ListItemText primary={e.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

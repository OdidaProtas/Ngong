import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FilterDrawerItem from "./FilterDrawerIItem";
import useModalControls from "../../../../hooks/modals/useModalControls";
import FilterAltOutlined from "@mui/icons-material/FilterAltOutlined";
import Tooltip from "@mui/material/Tooltip";

import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function FilterDrawer() {
  const classes = useStyles();
  const { open, toggle } = useModalControls();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  return (
    <div>
      <React.Fragment>
        <Tooltip title="More filters">
          <IconButton color="inherit" onClick={toggle}>
            <FilterAltOutlined />
          </IconButton>
        </Tooltip>
        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={toggle}
          onOpen={toggle}
        >
          <Box>
            <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
              More filers
            </Typography>
          </Box>
          <FilterDrawerItem toggle={toggle} />
        </SwipeableDrawer >
      </React.Fragment>
    </div>
  );
}

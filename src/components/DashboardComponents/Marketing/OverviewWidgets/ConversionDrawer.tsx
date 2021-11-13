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
import useModalControls from "../../../../hooks/modals/useModalControls";
import FilterAltOutlined from "@mui/icons-material/FilterAltOutlined";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import IconButton from "@mui/material/IconButton";
import Info from "@mui/icons-material/Info";
import Close from "@mui/icons-material/Close";

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
        <div>
          <Tooltip title="More filters">
            <IconButton size="small" color="inherit" onClick={toggle}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Tooltip>
        </div>

        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={toggle}
          onOpen={toggle}
        >
          <Box sx={{ p: 3, minWidth: "320px" }}>
            <IconButton onClick={toggle}>
              <Close />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
              Traffic insights
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Oct 10–Nov 8, 2021
            </Typography>
            <Box
              sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
              p={1}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Tooltip title="Number of sessions on your online store. A session is a period of continuous activity by a visitor">
                    <Typography color="secondary" sx={{ ml: 1, mt: 2 }}>
                      Online store sessions
                    </Typography>
                  </Tooltip>
                </div>
                <div></div>
              </div>

              <Typography
                variant="caption"
                sx={{ ml: 1, mt: 1, color: "text.secondary" }}
              >
                No sessions with orders this period
              </Typography>
              <Box sx={{ textAlign: "right" }}>
                <Button size="small" sx={{ mt: 2, textTransform: "none" }}>
                  View report
                </Button>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
              p={1}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Tooltip title="Number of sessions on your online store. A session is a period of continuous activity by a visitor">
                    <Typography color="secondary" sx={{ ml: 1, mt: 2 }}>
                      Top traffic sources
                    </Typography>
                  </Tooltip>
                </div>
                <div></div>
              </div>

              <Typography
                variant="caption"
                sx={{ ml: 1, mt: 1, color: "text.secondary" }}
              >
                No traffic in this period
              </Typography>
              <Box sx={{ textAlign: "right" }}>
                <Button size="small" sx={{ mt: 2, textTransform: "none" }}>
                  View report
                </Button>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
              p={1}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Tooltip title="Number of sessions on your online store. A session is a period of continuous activity by a visitor">
                    <Typography color="secondary" sx={{ ml: 1, mt: 2 }}>
                      Top sales sources
                    </Typography>
                  </Tooltip>
                </div>
                <div></div>
              </div>

              <Typography
                variant="caption"
                sx={{ ml: 1, mt: 1, color: "text.secondary" }}
              >
                No sales in this period
              </Typography>
              <Box sx={{ textAlign: "right" }}>
                <Button size="small" sx={{ mt: 2, textTransform: "none" }}>
                  View report
                </Button>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
              p={1}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Tooltip title="Number of sessions on your online store. A session is a period of continuous activity by a visitor">
                    <Typography
                      color="secondary"
                      sx={{ ml: 1, mt: 2 }}
                      variant="body1"
                    >
                      Top traffic locations
                    </Typography>
                  </Tooltip>
                </div>
                <div></div>
              </div>
              <Typography
                variant="caption"
                sx={{ ml: 1, mt: 1, color: "text.secondary" }}
              >
                No traffic in this period
              </Typography>
              <Box sx={{ textAlign: "right" }}>
                <Button size="small" sx={{ mt: 2, textTransform: "none" }}>
                  View report
                </Button>
              </Box>
            </Box>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

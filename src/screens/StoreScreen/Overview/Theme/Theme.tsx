import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import React from "react";

import LandingImg from "../../../../assets/images/template.png";
import useModalControls from "../../../../hooks/modals/useModalControls";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useHistory, useParams } from "react-router";

export default function Theme() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { push } = useHistory();
  const { id }: any = useParams();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Typography>Current theme</Typography>
          <Typography sx={{ my: 2 }}>
            This is the theme customers see when they visit your store.
          </Typography>
        </Grid>
        <Grid item xs>
          <Paper elevation={0} sx={{ p: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography>Snow</Typography>
                <Typography
                  variant="caption"
                  sx={{ mt: 1, color: "text.secondary" }}
                >
                  Added: Tuesday at 12:44
                </Typography>
              </div>
              <div>
                <Button
                  onClick={handleClick}
                  color="secondary"
                  sx={{ textTransform: "none" }}
                  size="small"
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Actions
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>Preview</MenuItem>
                  <MenuItem onClick={handleClose}>Rename</MenuItem>
                  <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                  <MenuItem onClick={handleClose}>Download theme file</MenuItem>
                  <MenuItem onClick={handleClose}>Edit code</MenuItem>
                  <MenuItem onClick={handleClose}>Edit languages</MenuItem>
                </Menu>
                <Button
                  color="secondary"
                  sx={{ textTransform: "none" }}
                  size="small"
                  onClick={() => push(`${id}/editor`)}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <img width="99%" src={LandingImg} alt="" />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Typography>Online store speed</Typography>
          <Typography sx={{ my: 1 }} variant="caption">
            The score shows how fast your store is loading for visitors. Store
            speed is affected by installed apps, edited theme code, and the size
            of images and videos. Learn more about speed score
          </Typography>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

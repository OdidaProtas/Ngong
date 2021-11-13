import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownCircle from "@mui/icons-material/ArrowDropDownCircle";
import { useHistory, useParams } from "react-router";

export default function Nav({ option }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [active, setActive] = React.useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { push } = useHistory();
  const { id }: any = useParams();

  const handleNav = (option) => {
    push(`/admin/${id}/marketing/${option}`);
    setActive(option);
    handleClose();
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="secondary"
        endIcon={<ArrowDropDownCircle />}
        sx={{ textTransform: "none" }}
      >
        {option}
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
        <MenuItem onClick={() => handleNav("")}>Marketing Overview</MenuItem>
        <MenuItem onClick={() => handleNav("campaigns")}>Campaigns</MenuItem>
        <MenuItem onClick={() => handleNav("automations")}>Automations</MenuItem>
      </Menu>
    </div>
  );
}

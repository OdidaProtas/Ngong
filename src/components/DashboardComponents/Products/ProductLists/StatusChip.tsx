import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";

export default function StatusChip({ status }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (e: any, stat) => {
    e.stopPropagation();
    handleClose();
  };

  return (
    <>
      <Chip
        color={
          status === "active"
            ? "success"
            : status === "draft"
            ? "primary"
            : "default"
        }
        onClick={handleClick}
        component="span"
        size="small"
        label={status}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={(e) => handleItemClick(e, "active")}>Draft</MenuItem>
        <MenuItem onClick={handleClose}>Active</MenuItem>
        <MenuItem onClick={handleClose}>Archived</MenuItem>
      </Menu>
    </>
  );
}

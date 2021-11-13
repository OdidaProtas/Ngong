import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";

export default function MobileExportImport({
  toggleExport,
  toggleImport,
}: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImport = (e) => {
    toggleImport();
    handleClose();
  };

  const handleExport = (e) => {
    toggleExport();
    handleClose();
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ textTransform: "none" }}
      >
        <MoreVert />
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
        <MenuItem onClick={handleImport}>Import</MenuItem>
        <MenuItem onClick={handleExport}>Export</MenuItem>
      </Menu>
    </div>
  );
}

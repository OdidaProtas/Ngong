import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory, useParams } from "react-router";

export default function InventoryTransferPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const pid = openPopover ? "simple-popover" : undefined;

  const { push } = useHistory();
  const { id }: any = useParams() as any;

  return (
    <div>
      <Typography
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          textDecoration: "underline",
          color: "blue",
        }}
      >
        {0}
      </Typography>
      <Popover
        id={pid}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography>
            <span
              onClick={() => push(`/admin/${id}/products/transfers/new`)}
              style={{ color: "blue", textDecoration: "underline", cursor:"pointer" }}
            >
              Add a transfer 
            </span>
           {" "} to record incoming inventory
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}

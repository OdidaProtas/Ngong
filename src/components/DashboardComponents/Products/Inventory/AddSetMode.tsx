import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function AddSetMode({ quantity }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [state, setState] = React.useState("add");

  const handleClose = (option: any) => {
    setState(option);
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState("");

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Button
            color="secondary"
            sx={{ textTransform: "none", my: 2 }}
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {state === "add" ? "Add" : "Set"}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClose("add")}>
              Add to available
            </MenuItem>
            <MenuItem onClick={() => handleClose("set")}>
              Set as available
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography>Available: {quantity}</Typography>
          {state === "add" ? (
            <Typography>
              Update to:{" "}
              {value ? `${parseInt(quantity) + parseInt(value)}` : "-"}
            </Typography>
          ) : (
            <Typography color="success">
              Update to: {value ? `${parseInt(value)}` : "-"}
            </Typography>
          )}
        </Box>
      </Box>

      <TextField
        type="number"
        onChange={(e) => setValue(e.target.value)}
        size="small"
        fullWidth
        placeholder="0"
        color="secondary"
      />

      <Button
        variant="outlined"
        color="inherit"
        disableElevation
        sx={{ textTransform: "none", mt: 1 }}
      >
        Save
      </Button>
    </div>
  );
}

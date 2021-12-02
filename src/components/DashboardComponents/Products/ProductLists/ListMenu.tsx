import Star from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import VendorBtn from "./VendorBtn";

export default function ListMenu() {
  return (
    <div style={{ display: "flex" }}>
      <VendorBtn />
      {/* <TextField
        color="secondary"
        size="small"
        sx={{ ml: 1, minWidth: "200px" }}
        placeholder="Tagged by"
      /> */}
    </div>
  );
}

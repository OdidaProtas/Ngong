import SearchOutlined from "@mui/icons-material/Search";
import Star from "@mui/icons-material/Star";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import React from "react";
import FilterDrawer from "./FilterDrawer";
import SortPicker from "./SortPicker";
import VendorBtn from "./VendorBtn";

export default function MobileSelectedHeader() {
  return (
    <div>
      <div style={{ marginTop: "12px", display: "flex" }}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          placeholder="Filter products"
          size="small"
        />
        <FilterDrawer />
      </div>
      <div style={{ marginTop: "12px", display: "flex", marginBottom: "12px" }}>
        <SortPicker />
        <VendorBtn />
        <div>
          {/* <IconButton size="small">
            <Star />
          </IconButton> */}
        </div>
      </div>
    </div>
  );
}

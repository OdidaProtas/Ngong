import Close from "@mui/icons-material/Close";
import LocalMall from "@mui/icons-material/LocalMall";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import useModalControls from "../../../../hooks/modals/useModalControls";

export default function Appbar({ handleChangeMode, mode }: any) {
  const { open, toggle } = useModalControls();

  const isMobile = mode === "mobile";

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Backdrop
        open={open}
        sx={{
          width: isMobile ? 300 : 930,
          marginLeft: isMobile ? 75 : 35.5,
          marginTop: 11,
          zIndex: 10000,
        }}
      >
        <div
          style={
            {
              position: "absolute",
              left: 0,
              height: "100%",
              top: 0,
              backgroundColor: "white",
              minWidth: "220px",
              borderLeft: "1px solid gray",
            } as any
          }
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggle}>
              <Close />
            </IconButton>
          </div>
          <Typography variant="h6" sx={{ mb: 3, ml: 3 }}>
            Store name
          </Typography>
          <Box sx={{ mt: 10, ml: 3 }}>
            <Typography sx={{ mb: 1, cursor: "pointer" }}>catalog</Typography>
            <Typography sx={{ mb: 1, cursor: "pointer" }}>about</Typography>
            <Typography sx={{ mb: 1, cursor: "pointer" }}>blog</Typography>
            <Typography sx={{ mb: 1, cursor: "pointer" }}>contact</Typography>
          </Box>
        </div>
      </Backdrop>
      <div style={{ display: "flex" }}>
        {mode === "mobile" ? (
          <div>
            <IconButton>
              <Menu />
            </IconButton>
          </div>
        ) : null}

        <div>
          <Typography
            sx={{ mt: 1, ml: 1, fontWeight: "bold", cursor: "pointer" }}
          >
            Store name
          </Typography>
        </div>
        {mode === "desktop" ? (
          <Box sx={{ ml: 3, display: "flex", mt: 1 }}>
            <Typography sx={{ mr: 2, cursor: "pointer" }}>catalog</Typography>
            <Typography sx={{ mr: 2, cursor: "pointer" }}>about</Typography>
            <Typography sx={{ mr: 2, cursor: "pointer" }}>blog</Typography>
            <Typography sx={{ mr: 2, cursor: "pointer" }}>contact</Typography>
          </Box>
        ) : null}
      </div>
      <div>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <LocalMall />
        </IconButton>
      </div>
    </div>
  );
}

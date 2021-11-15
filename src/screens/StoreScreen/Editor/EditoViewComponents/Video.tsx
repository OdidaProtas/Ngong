import PlayCircle from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";

export default function Video() {
  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h6">Video</Typography>
      <Box
        sx={{
          m: 1,
          bgcolor: "lightgray",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton sx={{color:"white"}} size="large">
          <PlayCircle />
        </IconButton>
      </Box>
    </Box>
  );
}

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";

export default function MarketingApps() {
  return (
    <Box sx={{ bgcolor: "background.paper", my: 5, mt: 2, p: 3 }}>
      <Typography sx={{ fontWeight: "bold" }}>Marketing apps</Typography>
      <Typography sx={{ my: 1 }}>
        Increase sessions, engage shoppers, and promote products by adding more
        marketing apps.
      </Typography>
      <Box sx={{ mb: 3, width: 220 }}>
        <img
          width="100"
          src="https://res.cloudinary.com/dreamnerd/image/upload/v1636178963/media/w3thuvnwzdnuqqzw5xla.png"
          alt=""
        />
        <Typography color="secondary">Bizna shop</Typography>
        <Typography variant="caption">
          Create a free mobile app experience for your online store.
        </Typography>
        <br />
        <Typography
          sx={{ mt: 2, cursor: "poiner", textDecoration: "underline" }}
          variant="caption"
        >
          Add app
        </Typography>
      </Box>
      <Button color="inherit" variant="outlined" sx={{ textTransform: "none" }}>
        View more apps
      </Button>
    </Box>
  );
}

const AppItem = () => {
  return <Box></Box>;
};

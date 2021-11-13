import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import ResultCards from "./OverviewWidgets/ResultCards";

const options = [
  {
    title: "Post purchase offer",
    desc: "Send a discount to your customers in the Shop app after they complete a purchase",
    icon: "",
  },
  {
    title: "Send tailored messages to customers with tags",
    desc: "Send an email every time a tag is added to a subscriber's customer profile",
    icon: "",
  },
  {
    title: "Recover sales and retain customers using sms",
    desc: "Send automated reminders with discount codes to win back customers who don’t complete checkout.F",
    icon: "",
  },
  {
    title: "Capture lost sales with abandoned cart emails",
    desc: "Send automated reminders with discount codes to win back customers who don’t complete checkout.",
    icon: "",
  },
];

export default function Automations() {
  return (
    <div>
      Automations
      <Box
        sx={{ my: 2, bgcolor: "background.paper", p: 2, borderRadius: "4px" }}
      >
        <Typography variant="h6">
          Automate marketing to grow your business
        </Typography>
        <Typography sx={{ my: 2 }}>
          Marketing automations show ads and send messages to your customers
          based on their behavior. Once you set up an automation, it will run
          for as long as you want.
        </Typography>
        <Divider />
        <Grid container mt={2} spacing={1}>
          {options.map(({ title, desc, icon }, index) => (
            <Grid item xs={12} lg={3} key={index}>
              <Typography sx={{ mb: 2 }}>{title}</Typography>
              {desc}
              <br />
              <Button sx={{ textTransform: "none" }} size="small">
                Create
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ my: 2, bgcolor: "background.paper", p: 2, borderRadius: "4px" }}
      >
        <Typography>Results from marketing automations</Typography>
        <Typography sx={{ color: "text.secondary" }} variant="caption">
          Oct 11–Nov 9, 2021 compared to Sep 11–Oct 10, 2021
        </Typography>
        <ResultCards />
      </Box>
      <Box
        sx={{
          my: 2,
          bgcolor: "background.paper",
          p: 2,
          borderRadius: "4px",
          mb: 10,
          height: 200,
        }}
      >
        <Typography>Automations</Typography>
        <Divider sx={{ mt: 2 }} />
        <Typography sx={{color:"text.secondary"}}>Marketing automations are set up once and run for as long as you want.</Typography>
        <Button sx={{ textTransform: "none", my: 2 }}>Start automation</Button>
      </Box>
    </div>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography/Typography";
import React, { useContext } from "react";
import { AuthContext } from "../../../state";
import Globe from "../../DashboardComponents/Reports/ReportsWidgets/Globe";
import { DateSalutationComponent } from "../../SharedComponents";
import VerticalTabs from "./Tabs";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import globed from "../../../assets/images/globed.jpg";
import one from "../../../assets/images/one.png";

import Grid from "@mui/material/Grid";
import { useHistory, useRouteMatch } from "react-router";

export default function HomeLandingPage() {
  const {
    authState: { user },
  }: any = useContext(AuthContext);

  const { url } = useRouteMatch();
  const { push } = useHistory();

  return (
    <div style={{ paddingBottom: "36px" }}>
      <DateSalutationComponent />
      <VerticalTabs />
      <Box sx={{ bgcolor: "lightgray", my: 6, borderRadius: "4px" }}>
        <Grid container>
          <Grid item xs={12} lg={6} pt={4} pl={{ lg: 3, xs: 1 }}>
            <Typography color="secondary" sx={{ mt: 3 }} variant="h6">
              Monitor your business in real-time
            </Typography>
            <Typography sx={{ my: 2 }}>
              Explore what's happening in your store minute by minute, with the
              new Live View. See where your customers are, what they're buying,
              and get daily running record of key metrics
            </Typography>
            <Button
              color="secondary"
              variant="outlined"
              sx={{ textTransform: "none", mb:2 }}
              onClick={() => push(`${url}/reports`)}
            >
              Explore live view
            </Button>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img
              style={{ maxWidth: "100%", height: "100%" }}
              src={globed}
              alt=""
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <Typography variant="h6" color="secondary">
          Verify your email address to keep your account secure
        </Typography>
        <Typography sx={{ mt: 2 }}>
          A verification email has been sent to odida.protas@gmail.com. Follow
          the link in the verification email to confirm that you can access your
          email account.
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          sx={{ textTransform: "none", mt: 2 }}
          onClick={() => push(`${url}/reports`)}
        >
          Explore live view
        </Button>
        <Divider sx={{ my: 2 }} />
        <Button sx={{ textTransform: "none" }} size={"small"}>
          Edit email address
        </Button>
      </Box>

      <Box sx={{ bgcolor: "lightgray", my: 6, borderRadius: "4px" }}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <img
              style={{ maxWidth: "100%", height: "100%" }}
              src={one}
              alt=""
            />
          </Grid>
          <Grid item lg={6} xs={12} pt={4} pl={{ lg: 3, xs: 1 }}>
            <Typography color="secondary" sx={{ mt: 3 }} variant="h6">
              Get started on MyBizz
            </Typography>
            <Typography sx={{ my: 2 }}>
              Free, 1-on-1 MyBizz training to help you get setup and selling in
              minutes.
            </Typography>
            <Button
              color="secondary"
              variant="outlined"
              sx={{ textTransform: "none", mb:2 }}
              // onClick={() => push(`${url}/reports`)}
            >
              Request Demo
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ bgcolor: "background.paper", p: 2, my: 3 }}>
        <Typography variant="h6" color="secondary">
          Get to know MyBizz with guided video tutorials
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Keep learning with new and upcoming videos by subscribing to the
          Shopify Help Center YouTube Channel.
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          disabled
          sx={{ textTransform: "none", mt: 2 }}
          onClick={() => push(`${url}/reports`)}
        >
          Explore videos
        </Button>
      </Box>
      <Box sx={{ bgcolor: "background.paper", p: 2, my: 3 }}>
        <Typography variant="h6" color="secondary">
          Shipping carrier surcharges
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Check the shipping carrier status page to keep up with any potential
          surcharges or changes to service levels.
        </Typography>
        <Button
          disabled
          color="inherit"
          variant="outlined"
          sx={{ textTransform: "none", mt: 2 }}
          onClick={() => push(`${url}/reports`)}
        >
          View status page
        </Button>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <Typography variant="h6" color="secondary">
          Tipping at checkout is now available for your online store
        </Typography>
        <Typography sx={{ mt: 2 }}>
          With tipping at checkout, your customers have the option to tip a
          percentage of their total order or custom amount.
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          disabled
          // sx={{ textTransform: "none", mt: 2 }}
          onClick={() => push(`${url}/reports`)}
        >
          Add online tipping
        </Button>
      </Box>
    </div>
  );
}

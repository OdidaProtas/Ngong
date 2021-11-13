import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import ConversionDrawer from "./ConversionDrawer";

export default function ResultCards() {
  return (
    <div>
      <Grid container spacing={2} pt={2}>
        <Grid xs={12} md={6} lg={3}>
          <Box
            sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
            p={1}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Tooltip title="Number of sessions on your online store. A session is a period of continuous activity by a visitor">
                  <Typography
                    color="primary"
                    sx={{ ml: 1, textDecoration: "underline", my: 1 }}
                    variant="h6"
                  >
                    Online store sessions
                  </Typography>
                </Tooltip>
              </div>
              <div>
                <ConversionDrawer />
              </div>
            </div>
            <Typography sx={{ ml: 1 }} variant="body1">
              0
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          <Box
            sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
            p={1}
          >
            <Tooltip title="Total online store orders from Tokea marketing campaigns and any external marketing sources that share data with Tokea">
              <Typography
                color="primary"
                sx={{ ml: 1, textDecoration: "underline", my: 1 }}
                variant="h6"
              >
                Orders from marketing
              </Typography>
            </Tooltip>
            <Typography sx={{ ml: 1 }} variant="body1">
              0
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          <Box
            sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
            p={1}
          >
            <Tooltip title="Total sales from Tokea marketing campaigns and any external marketing sources that share data with Tokea">
              <Typography
                color="primary"
                sx={{ ml: 1, textDecoration: "underline", my: 1 }}
                variant="h6"
              >
                Orders from marketing
              </Typography>
            </Tooltip>
            <Typography sx={{ ml: 1 }} variant="body1">
              kes 0.0
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          <Box
            sx={{ bgcolor: "background.paper", borderRadius: "4px", m: 1 }}
            p={1}
          >
            <Tooltip title="Total amount spent on Tokea marketing campaigns and any external marketing sources that share data with Tokea">
              <Typography
                color="primary"
                sx={{ ml: 1, textDecoration: "underline", my: 1 }}
                variant="h6"
              >
                Marketing cost
              </Typography>
            </Tooltip>

            <Typography sx={{ ml: 1 }} variant="body1">
              Kes 0.0
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

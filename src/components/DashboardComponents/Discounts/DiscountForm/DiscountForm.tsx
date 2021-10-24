import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import React from "react";
import { useHistory } from "react-router";
import ActiveDates from "./ActiveDates";
import CustomerBuys from "./CustomerBuys";
import Eligibility from "./Eligibility";
import Limit from "./Limit";
import Types from "./Types";

export default function DiscountForm() {
  const history = useHistory();
  return (
    <div>
      <IconButton onClick={() => history.goBack()} sx={{ mr: 2 }}>
        <ArrowBackIos />
      </IconButton>
      DISCOUNT
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                p: 3,
                mt: 3,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <>Discount code</>
                <Button sx={{ textTransform: "none" }}>Generate Code</Button>
              </Box>
              <div>
                <TextField
                  sx={{ mt: 2, mb: 2 }}
                  fullWidth
                  placeholder="Enter discount code"
                />
              </div>
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                p: 3,
                mt: 3,
              }}
            >
              <Types />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                p: 3,
                mt: 3,
              }}
            >
              <CustomerBuys />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                p: 3,
                mt: 3,
              }}
            >
              <Eligibility />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                p: 3,
                mt: 3,
              }}
            >
              <Limit />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                p: 3,
                mt: 3,
              }}
            >
              <ActiveDates />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "4px",
                p: 3,
                mt: 3,
                position: "fixed",
                width: "25%",
              }}
            >
                SUMMARY
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

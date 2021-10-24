import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Search from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import { useHistory } from "react-router";

export default function OrderDraftForm() {
  const history = useHistory();
  return (
    <div>
      <IconButton onClick={() => history.goBack()} sx={{ mr: 2 }}>
        <ArrowBackIos />
      </IconButton>
      ORDER FORM
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8} mt={3}>
            <Box
              sx={{ bgcolor: "background.paper", p: 4, borderRadius: "4px" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField placeholder="Search Products" fullWidth />
                </Grid>
                <Grid item xs mt={1}>
                  <Button sx={{ textTransform: "none" }} variant="outlined">
                    Browse
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              PAYMENT
              <br />
              <Grid container>
                <Grid item>
                  <Typography sx={{ mt: 2 }}>Subtotal</Typography>
                  <Typography sx={{ mt: 2 }} variant="h6">
                    Total
                  </Typography>
                </Grid>
                <Grid item></Grid>
              </Grid>
              <Divider sx={{ mt: 2, mb: 1 }} />
              <p>Add a product to calculate total and view payment options.</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              FIND OR CREATE CUSTOMER
              <TextField
                sx={{ mt: 3 }}
                size="small"
                placeholder="Search customers"
              />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              NOTES
              <TextField
                sx={{ mt: 3 }}
                size="small"
                placeholder="Search customers"
              />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              TAGS
              <TextField
                sx={{ mt: 3 }}
                size="small"
                placeholder="Search customers"
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

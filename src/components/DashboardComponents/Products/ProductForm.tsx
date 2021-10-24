import IconButton from "@mui/material/IconButton/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useHistory } from "react-router";
import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField";
import DescriptionEditor from "./DescriptionEditor";
import MediaPicker from "./MediaPicker";
import Pricing from "./Pricing";
import Inventoryform from "./Inventoryform";
import ShippingForm from "./ShippingForm";
import ProductStatus from "./ProductFormWidgets/ProductStatus";
import OrganizationWidgets from "./ProductFormWidgets/OrganizationWidgets";

export default function ProductForm() {
  const history = useHistory();

  return (
    <div>
      <IconButton
        onClick={() => history.goBack()}
        sx={{ marginRight: "18px", mr: 3 }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      ADD PRODUCT
      <div>
        <Divider sx={{ mt: 1, mb: 3 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Box
              sx={{ bgcolor: "background.paper", p: 4, borderRadius: "4px" }}
            >
              <TextField
                sx={{ mb: 3 }}
                label="Title"
                fullWidth
                placeholder="Example: Pishori Rice"
              />
              <DescriptionEditor />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              <MediaPicker />
            </Box>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              PRICING
              <Pricing />
            </Box>
            <Divider />
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              INVENTORY
              <Inventoryform />
            </Box>
            <Divider />
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 4,
                borderRadius: "4px",
                mt: 3,
              }}
            >
              SHIPPING
              <ShippingForm />
            </Box>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              sx={{ bgcolor: "background.paper", p: 4, borderRadius: "4px" }}
            >
              <ProductStatus />
            </Box>
            <OrganizationWidgets />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

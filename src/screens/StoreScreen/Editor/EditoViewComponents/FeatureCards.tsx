import { formLabelClasses } from "@mui/material";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import React from "react";
import ProductItem from "./ProductItem";

export default function FeatureCards({ mode }) {
  const isMobile = mode === "mobile";
  return (
    <div>
      <Grid container spacing={2} px={3} mb={5}>
        <Grid item xs={isMobile ? 12 : 4} lg={isMobile? 12 : 4}>
          <ProductItem />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4} lg={isMobile? 12 : 4}>
          <ProductItem />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4} lg={isMobile? 12 : 4}>
          <ProductItem/>
        </Grid>
      </Grid>
    </div>
  );
}

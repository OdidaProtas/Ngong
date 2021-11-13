import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import React from "react";
import { useHistory, useParams } from "react-router";

export default function ReportDetail() {
  const { name }: any = useParams();
  const { goBack } = useHistory();
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Button
            disableElevation
            color="inherit"
            variant="outlined"
            size="small"
            disableRipple
            onClick={goBack}
            sx={{ textTransform: "none" }}
            startIcon={<ArrowBackIos />}
          >
            {name.split("_").join(" ")}
          </Button>
        </Box>
        <Box>
          <Button color="secondary" sx={{ textTransform: "none" }} size="small">
            Print
          </Button>
          <Button color="secondary" sx={{ textTransform: "none" }} size="small">
            Export
          </Button>
          <Button color="secondary" sx={{ textTransform: "none" }} size="small">
            Save as
          </Button>
        </Box>
      </Box>
    </div>
  );
}

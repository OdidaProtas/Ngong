import Skeleton from "@mui/material/Skeleton";
import React from "react";

export default function TbFallBack() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div>
          <Skeleton height="72px" width="172px" />
        </div>
        <div>
          <Skeleton height="72px" width="72px" />
        </div>
      </div>
      <div>
        <Skeleton sx={{ mt: 3 }} height="100px" width="100%" />
        <Skeleton sx={{ mt: 1 }} height="100px" width="100%" />
        <Skeleton sx={{ mt: 1 }} height="100px" width="100%" />
      </div>
    </div>
  );
}

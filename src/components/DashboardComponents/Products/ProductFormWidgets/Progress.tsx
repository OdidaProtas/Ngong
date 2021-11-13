import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props: any) {
  return (
    <Box sx={root}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={box}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Progress({ progress }: any) {
  return <CircularProgressWithLabel value={progress} />;
}

const root: any = { position: "relative", display: "inline-flex" };

const box:any = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
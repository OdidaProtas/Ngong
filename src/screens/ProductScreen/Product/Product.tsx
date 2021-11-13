import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IosShareIcon from "@mui/icons-material/IosShare";
import Quantity from "./Quantity";

export default function Product() {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", minWidth: "300px" }}>
        <Typography sx={{ color: "gray" }} variant="caption">
          STORE NAME
        </Typography>
        <Typography sx={{  mb: 3 }} variant="h4">
          Product Title
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography variant="h6">Ksh. 0.0</Typography>
          <Typography sx={{ ml: 3, mt:0.5, color: "gray" }} variant="body2">
            Sold out
          </Typography>
        </div>
        <Typography sx={{ mt: 2, color: "gray" }} variant="body2">
          Quantity
        </Typography>
        <Quantity />
        <Button
          sx={{ textTransform: "none", mt: 1, cursor: "not-allowed" }}
          fullWidth
          color="inherit"
          variant="outlined"
        >
          Sold out
        </Button>
        <Button
          sx={{ mt: 4, textTransform: "none" }}
          color="inherit"
          size="small"
          startIcon={<IosShareIcon />}
        >
          Share
        </Button>
      </div>
    </div>
  );
}

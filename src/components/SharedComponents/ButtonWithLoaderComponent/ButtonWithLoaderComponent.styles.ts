import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: "12px",
        display:"flex",
        justifyContent:"center"
    },
  })
);

export default useStyles;
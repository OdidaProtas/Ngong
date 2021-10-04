import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
    },
    btn: {
      margin: theme.spacing(1),
      textTransform: "none",
    },
  })
);

export default useStyles;

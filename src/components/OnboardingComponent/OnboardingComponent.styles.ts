import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      justifyContent: "center",
      display: "flex",
    },
    title: {
      fontWeight: "bold",
      letterSpacing: theme.spacing(0.3),
      textAlign: "center",
    },
  })
);

export default useStyles;

import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign:"center"
    },
    icon: {
      height: "48px",
      width: "48px",
      marginTop: theme.spacing(0.5),
    },
    text: {
      color: colors.primary,
      fontWeight: "bold",
      letterSpacing: theme.spacing(0.3),
    },
  })
);

export default useStyles;

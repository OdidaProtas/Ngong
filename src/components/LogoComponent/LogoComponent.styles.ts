import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign:"center"
    },
    icon: {
      height: "30px",
      width: "30px",
      marginTop: theme.spacing(1.2),
    },
    text: {
      color: colors.primary,
      fontWeight: "bold",
      letterSpacing: theme.spacing(0.3),
    },
  })
);

export default useStyles;

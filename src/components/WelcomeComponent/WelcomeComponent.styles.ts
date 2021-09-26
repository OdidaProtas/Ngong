import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    img: {
      maxWidth: "60%",
      [theme.breakpoints.down("lg")]: {
        maxWidth: "100%",
      },
    },
    salutation: {
      margin: theme.spacing(3),
      fontFamily: "Poppins",
      fontWeight: "bold",
    },
    helper: {
      fontFamily: "Poppins",
      marginLeft: theme.spacing(5),
    },
    hero2Container: {
      textAlign: "center",
      paddingTop: theme.spacing(3),
    },
    hero2: {
      maxWidth: "50%",
    },
  })
);

export default useStyles;

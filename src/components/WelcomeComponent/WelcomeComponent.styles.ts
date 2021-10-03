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
      [theme.breakpoints.down("lg")]: {
        margin: 0,
      },
    },
    helper: {
      fontFamily: "Poppins",
      marginLeft: theme.spacing(5),
      [theme.breakpoints.down("lg")]: {
        marginLeft: 0,
      },
    },
    hero2Container: {
      textAlign: "center",
      paddingTop: theme.spacing(3),
    },
    hero2: {
      maxWidth: "50%",
    },
    dateContainer: {
      // margin: theme.spacing(3),
    },
  })
);

export default useStyles;

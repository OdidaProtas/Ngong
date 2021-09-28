import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      fontFamily: "Poppins",
      fontWeight: "bold",
      letterSpacing: theme.spacing(0.4),
      [theme.breakpoints.down("lg")]: {
        marginTop: theme.spacing(15),
      },
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(1),
    },
    onBoardingText: {
      textAlign: "center",
      fontFamily: "Poppins",
      maxWidth: 400,
    },
    list: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      paddingLeft: theme.spacing(4),
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      left: 170,
      [theme.breakpoints.down("lg")]: {
        left:0,
        textAlign: "center",
        position: "relative",
        marginTop: theme.spacing(1)
      },
    },
    footerLink: {
      textAlign: "center",
      fontFamily: "Poppins",
      margin: theme.spacing(1),
    },
    onBoardingTextContainer: {
      display: "flex",
      justifyContent: "center",
    },
    footerGradient: {
      backgroundColor: "blue",
      height: 200,
      width: 200,
      position: "absolute",
      right: "50%",
      bottom: 0,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    styledDeco: {
      height: 50,
      width: 50,
      position: "absolute",
      top: -100,
      left: -100,
    },
  })
);

export default useStyles;

import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: "center",
      marginTop: theme.spacing(3),
      fontFamily: "Poppins",
      fontWeight: "bold",
      letterSpacing: theme.spacing(0.4),
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(2),
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
        display:"none"
      },
    },
  })
);

export default useStyles;

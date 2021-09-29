import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(5),
      position: "absolute",
      top: 0,
      paddingLeft: theme.spacing(13),
      [theme.breakpoints.down("md")]: {
        position: "relative",
        paddingLeft: theme.spacing(2),
        textAlign: "center",
        paddingTop: theme.spacing(3),
      },
    },
    textInput: {
      marginTop: theme.spacing(0.6),
      marginBottom: theme.spacing(1.8),
    },
    title: {
      marginTop: theme.spacing(3),
      fontFamily: "Poppins",
    },
    helperText: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
      color: colors.text,
      fontFamily: "Poppins",
      cursor: "pointer",
    },
    form: {
      textAlign: "left",
    },
    formInputLabel: {
      marginBottom: theme.spacing(3),
      textAlign: "right",
    },
    submitBtn: {
      marginTop: theme.spacing(2),
      textTransform: "none",
    },
    decoSvg: {
      maxHeight: "100%",
      maxWidth: "100%",
    },
    loginDecoContainer: {
      position: "absolute",
      bottom: 0,
    },
    regContainer: {
      display: "none",
    },
    regSvg: {
      maxWidth: "100%",
      maxHeight: "100%",
      marginTop: -50,
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    forgotPasswordText: {
      cursor: "pointer",
      textAlign: "right",
      marginTop: theme.spacing(3),
      fontFamily: "Poppins",
    },
    helperTexterr: {
      color: "red",
      fontFamily:"Poppins"
    },
  })
);

export default useStyles;

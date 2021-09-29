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
    formContainer: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(5),
    },
    resendOtpBtn: {
      marginTop: theme.spacing(3),
    },
    textInput: {
      marginTop: theme.spacing(3),
    },
    btn: {
      marginTop: theme.spacing(3),
    },
  })
);

export default useStyles;

import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    controls: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: theme.spacing(3),
    },
    title: {
      fontFamily: "Poppins",
      marginBottom: theme.spacing(1),
    },
    subtitle: {
      marginTop: theme.spacing(4),
      fontFamily: "Poppins",
      marginBottom: theme.spacing(1),
    },
    label: {
      fontFamily: "Poppins",
      marginTop: theme.spacing(2),
    },
    textInput: {
      marginBottom: theme.spacing(2),
    },
    btn: {
      marginRight: theme.spacing(2),
      textTransform: "none",
    },
    helper: {
      fontFamily: "Poppins",
    },
  })
);

export default useStyles;

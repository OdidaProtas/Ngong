import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(5),
      position:"absolute",
      top:0,
      paddingLeft: theme.spacing(13)
    },
    textInput: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    title: {
      marginTop: theme.spacing(6),
      fontFamily:"Poppins"
    },
    helperText: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
      color: colors.text,
      fontFamily:"Poppins"
    },
    form: {
    },
    formInputLabel: {
      marginBottom: theme.spacing(3)
    },
    submitBtn:{
      marginTop: theme.spacing(2)
    }
  })
);

export default useStyles;

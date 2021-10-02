import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    inputContainer: {
      marginTop: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
    uploadBtn:{
        padding: theme.spacing(1),
        backgroundColor:"gray",
        marginTop: theme.spacing(2)
    },
    uploadBtnContainer:{
        marginTop: theme.spacing(2),
        cursor:"pointer",
        borderRadius:"4px"
    }
  })
);

export default useStyles;

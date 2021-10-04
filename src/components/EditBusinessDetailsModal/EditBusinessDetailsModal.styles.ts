import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editIcon: {
      display: "flex",
      justifyContent: "flex-end",
      cursor: "pointer",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
    bodyTitleContainer: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
    },
    modalContent: {
      textAlign: "center",
      marginBottom: theme.spacing(3),
    },
    textInput: {
      marginTop: theme.spacing(2),
    },
    deleteContainer: {
      marginTop: theme.spacing(3),
    },
    deleteBtn: {
      marginTop: theme.spacing(2),
      textTransform: "none",
    },
  })
);

export default useStyles;

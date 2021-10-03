import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      textAlign: "center",
      backgroundColor: colors.accent,
      padding: theme.spacing(3),
      borderRadius: "4px",
      cursor: "pointer",
    },
    title: {
      marginTop: theme.spacing(3),
    },
    description: {
      marginTop: theme.spacing(3),
    },
    actions: {
      display: "flex",
    },
  })
);

export default useStyles;

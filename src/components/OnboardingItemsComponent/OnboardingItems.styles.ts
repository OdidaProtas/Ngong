import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(3)
    },
    icon: {
      height: 36,
      width: 36,
    },
    text: {
      fontFamily: "Poppins",
      textAlign: "left",
    },
  })
);

export default useStyles;

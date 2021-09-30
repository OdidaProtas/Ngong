import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      cursor: "pointer",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      color: colors.primary,
      fontFamily: "Poppins",
      padding: theme.spacing(1.4),
      borderRadius:4
    },
    icon: {
      height: 20, width: 20
    },
    btnText: {

    }
  })
);

export default useStyles;

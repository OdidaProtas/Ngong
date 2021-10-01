import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      elevation: 0,
    },
    root: {
      backgroundColor: colors.accent,
      minHeight: "100vh",
      padding: "3px",
      overflow: "hidden",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
    },
    drawerItemsContainer: {
      // paddingLeft: theme.spacing(),
    },
    sectionTitle: {
      fontFamily: "Poppins",
      margin: theme.spacing(3),
    },
  })
);

export default useStyles;

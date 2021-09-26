import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      elevation: 0,
    },
    searchBar: {
      borderRadius: "24px",
    },
    shopName: {
      color: colors.primary,
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    mobileMenu: {
    },
    desktopMenu: {
      [theme.breakpoints.down("lg")]: {
        // display: "none",
      },
    },
    searchBarContainer: {
      textAlign: "center",
      marginLeft: "60px",
      width: "50%",
      [theme.breakpoints.down("lg")]: {
        marginLeft: "0px",
        width: "100%",
      },
    },
  })
);

export default useStyles;

import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { textAlign: "center" },
    title: {
      textAlign: "center",
      marginTop: theme.spacing(4),
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4),
    },
    onBoardingText: {
      textAlign: "center",
      marginLeft: theme.spacing(18),
      marginRight: theme.spacing(18),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(4),
      },
    },
    list: {
      paddingLeft: theme.spacing(24),
      paddingTop: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(10),
      },
    },
    footer: {
      marginTop: theme.spacing(9),
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(3),
      },
    },
    footerLink: {
      margin: theme.spacing(1),
    },
  })
);

export default useStyles;

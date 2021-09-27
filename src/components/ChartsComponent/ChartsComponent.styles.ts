import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    dateContainer: {
      margin: theme.spacing(3),
    },
    section: {
      paddingTop: theme.spacing(3),
    },
  })
);

export default useStyles;

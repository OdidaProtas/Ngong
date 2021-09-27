import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(5),
    },
    item: {
      textAlign: "center",
      border: "3px solid lightblue",
      padding: theme.spacing(3),
      borderRadius: "4px",
    },
  })
);

export default useStyles;

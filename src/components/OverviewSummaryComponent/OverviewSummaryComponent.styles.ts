import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      display: "flex",
      justifyContent: "space-between",
      paddingTop: theme.spacing(6),
    },
    item: {
      padding: theme.spacing(2),
      textAlign: "center",
      border: "3px solid lightblue",
      borderRadius: "4px"
    },
  })
);

export default useStyles;

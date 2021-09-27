import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    title: {
      textAlign: "center",
    },
    dummyMap: {
      height: "20%",
    },
  })
);

export default useStyles;

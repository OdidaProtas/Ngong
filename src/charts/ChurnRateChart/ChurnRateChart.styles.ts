import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      height: 300,
      padding: theme.spacing(3),
    },
  })
);

export default useStyles;

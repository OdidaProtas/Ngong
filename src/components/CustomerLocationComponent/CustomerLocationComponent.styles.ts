import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(12),
    },
    title:{
        textAlign:"center"
    }
  })
);

export default useStyles;

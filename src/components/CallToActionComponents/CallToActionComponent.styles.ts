import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardItem: {
        textAlign:"center"
    },
    title:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    }
  })
);

export default useStyles;

import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontFamily: "Poppins",
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.2),
    },
    listItems:{
        cursor:"pointer",
        marginLeft: theme.spacing(3)
    }
  })
);

export default useStyles;

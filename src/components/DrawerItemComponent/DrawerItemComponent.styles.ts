import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontFamily: "Poppins",
    },
    listItems: {
      cursor: "pointer",
      fontFamily: "Poppins",
    },
    subListItems: {
      fontFamily: "Poppins",
      marginLeft: theme.spacing(7),
      cursor: "pointer",
      marginBottom: theme.spacing(2)
    },
  })
);

export default useStyles;

import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import colors from "../../constants/Themes/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display:"flex",
        justifyContent:"flex-end"
    },
    icon:{
        // marginTop: theme.spacing(2)
    },
    date:{
        display:"flex"
    }
  })
);

export default useStyles;

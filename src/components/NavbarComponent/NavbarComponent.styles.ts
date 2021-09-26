import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      elevation: 0,
    },
    searchBar:{
      borderRadius: "24px"
    }
  })
);

export default useStyles;

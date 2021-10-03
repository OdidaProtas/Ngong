import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      maxWidth: "66%",
    },
    imageContainer: {
      marginTop: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    sectionTitle:{
      fontWeight:"bold"
    },
    infoTitle:{
      // marginTop: theme.spacing(2)
    },
    editIcon:{
      display:"flex",
      justifyContent:"flex-end"
    },
    toolbar:{
      display:"flex",
      justifyContent:"space-between",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1)
    },
    bodyTitleContainer:{
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    }
  })
);

export default useStyles;

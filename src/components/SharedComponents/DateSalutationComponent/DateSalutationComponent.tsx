import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import useStyles from "./DateSalutionComponent.styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";

export default function DateSalutationComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6">Welcome, John Doe</Typography>
      <Typography sx={sx["title"]} variant="h5">
        Overview Dashboard
      </Typography>
      <Grid container>
        <Grid item xs={3} lg={1}>
          <Button
            sx={sx["btn"]}
            variant="contained"
            startIcon={<CalendarTodayIcon />}
            size="small"
            disableElevation
          >
            Today
          </Button>
        </Grid>
        <Grid item xs pt={4} pl={2}>
          Compared to <Box sx={{fontWeight:"bold"}} component="span">Oct 10, 21</Box>
        </Grid>
      </Grid>
    </div>
  );
}
const sx: any = {
  btn: {
    textTransform: "none",
    marginTop: "18px",
  },
  title: {
    marginTop: "18px",
  },
};

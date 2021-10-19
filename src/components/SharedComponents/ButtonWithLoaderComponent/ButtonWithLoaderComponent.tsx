import { Button } from "@mui/material";
import { lazy, Suspense } from "react";
import useStyles from "./ButtonWithLoaderComponent.styles";
const CircularProgress = lazy(
  () => import("@mui/material/CircularProgress/CircularProgress")
);

interface ButtonAndLoaderComponentInterface {
  loading: boolean;
  title: string;
}

export default function ButtonWithLoaderComponent({
  loading,
  title,
}: ButtonAndLoaderComponentInterface) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loading ? (
        <Button fullWidth variant="contained" disabled>
          <Suspense fallback={<div></div>}>
            <CircularProgress size={26} />
          </Suspense>
        </Button>
      ) : (
        <Button
          disableElevation
          fullWidth
          variant="contained"
          type="submit"
          color="secondary"
          sx={{
            textTransform:"none"
          }}
        >
          {title}
        </Button>
      )}
    </div>
  );
}

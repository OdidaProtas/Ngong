import { Button } from "@mui/material";
import { lazy, Suspense } from "react";
import useStyles from "./ButtonWithLoaderComponent.styles";
const CircularProgress = lazy(
  () => import("@mui/material/CircularProgress/CircularProgress")
);

interface ButtonAndLoaderComponentInterface {
  loading: boolean;
}

export default function ButtonWithLoaderComponent({
  loading,
}: ButtonAndLoaderComponentInterface) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loading ? (
        <Button fullWidth size="small" variant="contained" disabled>
          <Suspense fallback={<div></div>}>
            <CircularProgress size={20} />
          </Suspense>
        </Button>
      ) : (
        <Button disableElevation fullWidth variant="contained" size="small" type="submit">
          Submit
        </Button>
      )}
    </div>
  );
}
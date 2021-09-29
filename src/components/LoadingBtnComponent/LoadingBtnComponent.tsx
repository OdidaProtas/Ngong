import Button from "@mui/material/Button/Button";
import { lazy, Suspense } from "react";

const CircularProgress = lazy(
  () => import("@mui/material/CircularProgress/CircularProgress")
);

export default function LoadingBtnComponent() {
  return (
    <div>
      <Button fullWidth size="small" variant="contained" disabled>
        <Suspense fallback={<div></div>}>
          <CircularProgress size={20} />
        </Suspense>
      </Button>
    </div>
  );
}

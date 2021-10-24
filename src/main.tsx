import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = lazy(() => import("./App"));

import { ThemeProvider } from "@mui/system";
import { theme } from "./constants";
import Loader from "./components/SharedComponents/Loader/Loader";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

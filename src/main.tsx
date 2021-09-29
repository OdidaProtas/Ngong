import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = lazy(() => import("./App"));

import { ThemeProvider } from "@mui/system";
import theme from "./constants/Themes/themes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

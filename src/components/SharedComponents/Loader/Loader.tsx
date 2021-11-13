import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import logo from "../../../assets/images/logo_transparent.png";
import CircularProgress from "@mui/material/CircularProgress";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
border-color: purple;
`;

export default function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div>
          <img style={{ marginBottom: "36px" }} src={logo} width="50%" alt="" />
        </div>
        <div className="sweet-loading">
          <CircularProgress color="secondary" />
        </div>
      </div>
    </div>
  );
}

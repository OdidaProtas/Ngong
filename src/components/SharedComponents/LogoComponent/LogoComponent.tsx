import React from "react";
import { useHistory } from "react-router";

import LogoImage from "../../../assets/images/logo_transparent.png";

export default function LogoComponent() {
  const { push } = useHistory();
  return (
    <div style={{}}>
      <div>
        <img
          onClick={() => push("/")}
          style={{ margin: "18px", cursor: "pointer" }}
          width="50%"
          src={LogoImage}
          alt="Protus logo"
        />
      </div>
    </div>
  );
}

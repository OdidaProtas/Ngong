import React from "react";

import LogoImage from "../../../assets/images/logo_transparent.png";

export default function LogoComponent() {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img height="100" width="100%" src={LogoImage} alt="Protus logo" />
    </div>
  );
}

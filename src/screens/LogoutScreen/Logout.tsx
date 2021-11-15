import React, { useEffect } from "react";
import { LogoComponent } from "../../components/SharedComponents";

export default function Logout() {
  4;

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      you have been logged out
      <div style={{ marginTop: "144px" }}>
        <LogoComponent />
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { LogoComponent } from "../../components/SharedComponents";

export default function Logout() {
  const { push } = useHistory();
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "155px" }}>
      you have been logged out
      <div style={{ marginTop: "144px" }}>
        <LogoComponent />
      </div>
      <button onClick={()=>push("/")}>Home</button>
    </div>
  );
}

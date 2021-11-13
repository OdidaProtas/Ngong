import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography/Typography";
import React, { useContext } from "react";
import { AuthContext } from "../../../state";
import { DateSalutationComponent } from "../../SharedComponents";
import VerticalTabs from "./Tabs";

export default function HomeLandingPage() {
  const {
    authState: { user },
  }: any = useContext(AuthContext);

  return (
    <div style={{ paddingBottom: "36px" }}>
      <DateSalutationComponent />
      <VerticalTabs />
    </div>
  );
}

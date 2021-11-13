import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useState } from "react";

import landing from "../../../assets/images/landing-page-leads.png";
import Appbar from "./EditoViewComponents/Appbar";
import Collections from "./EditoViewComponents/Collections";
import EmailSub from "./EditoViewComponents/EmailSub";
import FeatureCards from "./EditoViewComponents/FeatureCards";
import Footer from "./EditoViewComponents/Footer";
import FullWidth from "./EditoViewComponents/FullWidth";
import LandingPage from "./EditoViewComponents/LandingPage";

export default function EditorView({ handleModeChange, mode }) {
  const [appTheme, setAppTheme] = useState({
    root: {},
    title: {},
  });

  return (
    <div style={{ border: "1px solid lightgray" }}>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography>Welcome to our store</Typography>
      </Box>
      <Divider />
      <Appbar handleChangeMode={handleModeChange} mode={mode} />
      <LandingPage />
      <Divider />
      <FeatureCards />
      <Collections />
      <FullWidth />
      <EmailSub />
      <Footer />
    </div>
  );
}

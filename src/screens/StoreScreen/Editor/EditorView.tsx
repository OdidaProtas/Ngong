import Box from "@mui/system/Box";
import { useState } from "react";
import HomePage from "./Pages/HomePage";

export default function EditorView({ handleModeChange, mode }) {
  const [appTheme, setAppTheme] = useState({
    root: {},
    title: {},
  });

  const isMobile = mode === "mobile";

  return (
    <div
      style={{
        display: isMobile ? "flex" : "block",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        style={
          {
            border: "1px solid lightgray",
            maxWidth: isMobile ? 300 : "100%",
          } as any
        }
        className="editorview-desktop"
      >
        <HomePage mode={mode} handleModeChange={handleModeChange} />
      </Box>
      <Box
        className="editorview-mobile"
        style={
          {
            border: "1px solid lightgray",
            maxWidth: "100%",
          } as any
        }
      >
        <HomePage mode={mode} handleModeChange={handleModeChange} />
      </Box>
    </div>
  );
}

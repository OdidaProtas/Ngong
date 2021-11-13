import React, { useState } from "react";
import EditorNav from "./EditoNav";
import EditorAppBarDrawer from "./EditorAppBarDrawer";
import EditorView from "./EditorView";

export default function Editor() {
  const [mode, setMode] = useState("desktop");
  const handleChange = (m: string) => setMode(m);
  return (
    <div>
      <EditorAppBarDrawer handleModeChange={handleChange}>
        <EditorView mode={mode} handleModeChange={handleChange} />
      </EditorAppBarDrawer>
    </div>
  );
}

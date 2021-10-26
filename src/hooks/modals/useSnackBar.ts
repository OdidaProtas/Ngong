import React, { useState } from "react";

export default function useSnackBar() {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [msg, setMsg] = useState("");

  const toggleOn = (options: any) => {
    const { m, sev } = options;
    setSeverity(sev);
    setMsg(m);
    toggle();
  };

  const toggle = () => setOpen(!open);

  return { open, toggle, toggleOn, msg, severity };
}

import { useState } from "react";

export default function useModalControls() {
  const [open, setOpen] = useState(false);

  const toggle = setOpen((prevState) => !prevState);

  return [open, toggle];
}

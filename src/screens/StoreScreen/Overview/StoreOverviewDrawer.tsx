import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";
import useModalControls from "../../../hooks/modals/useModalControls";

export default function StoreOverviewDrawer({ children, open, toggle }: any) {
  return (
    <React.Fragment>
      {/* <SwipeableDrawer anchor={"left"} open={open} onClose={toggle} onOpen={toggle}>
        {children}
      </SwipeableDrawer> */}
    </React.Fragment>
  );
}

import React from "react";

import { DashboardDrawerAppBar } from "../../components/DashboardComponents";
import { DashboardNavigation } from "../../navigation";

export default function DashboardScreen() {
  return (
    <div>
      <DashboardDrawerAppBar>
        <DashboardNavigation />
      </DashboardDrawerAppBar>
    </div>
  );
}

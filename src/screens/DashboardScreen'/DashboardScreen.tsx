import React from "react";

import { DashboardDrawerAppBar } from "../../components/DashboardComponents";
import { DashboardNavigation } from "../../navigation";

export default function DashboardScreen({ match }: any) {
  return (
    <div>
      <DashboardDrawerAppBar>
        <DashboardNavigation match={match} />
      </DashboardDrawerAppBar>
    </div>
  );
}

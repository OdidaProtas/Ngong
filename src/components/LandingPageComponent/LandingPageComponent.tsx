import { Suspense } from "react";
import { WelcomeComponent, OverviewComponent, ChartsComponent } from "..";

export default function LandingPageComponent() {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <WelcomeComponent />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <OverviewComponent />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <ChartsComponent />
      </Suspense>
      {/* <CustomerLocationComponent /> */}
    </div>
  );
}

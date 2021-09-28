import { WelcomeComponent, OverviewComponent, ChartsComponent } from "..";

export default function LandingPageComponent() {
  return (
    <div>
      <WelcomeComponent />
      <OverviewComponent />
      <ChartsComponent />
      {/* <CustomerLocationComponent /> */}
    </div>
  );
}

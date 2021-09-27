import {
  WelcomeComponent,
  OverviewComponent,
  ChartsComponent,
  CustomerLocationComponent,
} from "..";

export default function LandingPageComponent() {
  return (
    <div>
      <WelcomeComponent />
      <OverviewComponent />
      <ChartsComponent />
      <CustomerLocationComponent />
    </div>
  );
}

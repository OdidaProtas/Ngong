import { WelcomeComponent, DateComponent, OverviewComponent } from "..";

export default function LandingPageComponent() {
  return (
    <div>
      <DateComponent />
      <WelcomeComponent />
      <OverviewComponent />
    </div>
  );
}

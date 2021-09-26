import { WelcomeComponent, DateComponent, OverviewComponent } from "..";
import ChartsComponent from "../ChartsComponent/ChartsComponent";

export default function LandingPageComponent() {
  return (
    <div>
      <DateComponent />
      <WelcomeComponent />
      <OverviewComponent />
      <ChartsComponent />
    </div>
  );
}

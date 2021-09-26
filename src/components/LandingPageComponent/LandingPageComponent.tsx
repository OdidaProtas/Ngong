import { WelcomeComponent, DateComponent, OverviewComponent } from "..";
import ChartsComponent from "../ChartsComponent/ChartsComponent";
import CustomerLocationComponent from "../CustomerLocationComponent/CustomerLocationComponent";

export default function LandingPageComponent() {
  return (
    <div>
      <DateComponent />
      <WelcomeComponent />
      <OverviewComponent />
      {/* <ChartsComponent /> */}
      {/* <CustomerLocationComponent /> */}
    </div>
  );
}

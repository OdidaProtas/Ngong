import { Typography } from "@mui/material";
import { LogoComponent } from "..";
import {
  AiIcon,
  BusinessIcon,
  CustomerIcon,
  InsightIcon,
} from "../../assets/images";
import OnboardingItemsComponent from "../OnboardingItemsComponent/OnboardingItemsComponent";
import useStyles from "./OnboardingComponent.styles";

const title = "Welcome";
const onboardingText =
  "We provide accurate AI-powered insights that provides better solutions to small and medium economies";
const termsText = "Terms of use";
const policyText = "Privacy policy";
const listItems = [
  { icon: AiIcon, text: "AI powered Business Intelligence" },
  { icon: CustomerIcon, text: "360% Customer View" },
  { icon: InsightIcon, text: "100% Business Insights" },
  { icon: BusinessIcon, text: "Revenue Projection Charts" },
];

const BlurredDeco = () => {
  return (
    <div>
      <div
        className="styledDeco"
        style={{
          height: 50,
          width: 50,
          position: "absolute",
          top: -100,
          left: -100,
        }}
      ></div>
    </div>
  );
};

const BluttedFooter = () => {
  const classes = useStyles();
  return <div className={`footerGradient ${classes.footerGradient}`} />;
};

export default function OnboardingComponent() {
  const classes = useStyles();
  return (
    <div>
      <BlurredDeco />
      <div>
        <div>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <div>
            <div className={classes.logoContainer}>
              <LogoComponent />
            </div>
            <div className={classes.onBoardingTextContainer}>
              <p className={classes.onBoardingText}>{onboardingText}</p>
            </div>
            <div className={classes.list}>
              <div>
                {listItems.map((list: any, index: number) => (
                  <OnboardingItemsComponent item={list} key={index} />
                ))}
              </div>
            </div>
            <div className={classes.footer}>
              <Typography variant="body2" className={classes.footerLink}>
                {termsText}
              </Typography>
              <Typography variant="body2" className={classes.footerLink}>
                {policyText}
              </Typography>
            </div>
          </div>
        </div>
        <BluttedFooter />
      </div>
    </div>
  );
}

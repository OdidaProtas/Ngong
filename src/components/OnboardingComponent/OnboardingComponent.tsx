import { Container, Typography } from "@mui/material";
import { Suspense } from "react";
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
  const classes = useStyles();
  return (
    <div>
      <div className={`styledDeco ${classes.styledDeco}`} />
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
              <Suspense fallback={<div></div>}>
                <LogoComponent />
              </Suspense>
            </div>
            <Container className={classes.onBoardingTextContainer}>
              <Typography className={classes.onBoardingText}>
                {onboardingText}
              </Typography>
            </Container>
            <div className={classes.list}>
              <div>
                {listItems.map((list: any, index: number) => (
                  <Suspense key={index} fallback={<div></div>}>
                    <OnboardingItemsComponent item={list} />
                  </Suspense>
                ))}
              </div>
            </div>
            <div className={classes.footer}>
              <Typography variant="caption" className={classes.footerLink}>
                {termsText}
              </Typography>
              <Typography variant="caption" className={classes.footerLink}>
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

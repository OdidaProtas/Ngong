import React from "react";
import { LogoComponent, StyledBackground } from "..";
import {
  AiIcon,
  BusinessIcon,
  CustomerIcon,
  InsightIcon,
} from "../../assets/images";
import OnboardingItemsComponent from "../OnboardingItemsComponent/OnboardingItemsComponent";
import useStyles from "./OnboardingComponent.styles";

const onboardingText =
  "We provide accurate AI-powered insights that provides better solutions to small and medium economies";
const termsText = "Terms of use";
const policyText = "Privacy Policy";
const listItems = [
  { icon: AiIcon, text: "AI powered Business Intelligence" },
  { icon: CustomerIcon, text: "360% Customer View" },
  { icon: InsightIcon, text: "100% Business Insights" },
  { icon: BusinessIcon, text: "Revenue Projection Charts" },
];

export default function OnboardingComponent() {
  const classes = useStyles();
  return (
    <StyledBackground backgroundImage>
      <div className={classes.root}>
        <div>
          <p className={classes.title}>Welcome</p>
          <div>
            <LogoComponent />
            <p>{onboardingText}</p>
            <>
              {listItems.map((list: any, index: number) => (
                <OnboardingItemsComponent item={list} key={index} />
              ))}
            </>
            <a>{termsText}</a>
            <a>{policyText}</a>
          </div>
        </div>
      </div>
    </StyledBackground>
  );
}

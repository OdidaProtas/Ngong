import { Grid, Typography } from "@mui/material";
import React from "react";
import { LogoComponent, StyledBackground } from "..";
import {
  AiIcon,
  BusinessIcon,
  CustomerIcon,
  InsightIcon,
} from "../../assets/images";
import colors from "../../constants/Themes/colors";
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

export default function OnboardingComponent() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <div>
            <div className={classes.logoContainer}>
              <LogoComponent />
            </div>
            <p className={classes.onBoardingText}>{onboardingText}</p>
            <div className={classes.list}>
              {listItems.map((list: any, index: number) => (
                <OnboardingItemsComponent item={list} key={index} />
              ))}
            </div>
            <div className={classes.footer}>
              <a className={classes.footerLink}>{termsText}</a>
              <a className={classes.footerLink}>{policyText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

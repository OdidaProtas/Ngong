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

const Deco = () => {
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

export default function OnboardingComponent() {
  const classes = useStyles();
  return (
    <div>
      <Deco />
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
        <div
          className="footerGradient"
          style={{
            backgroundColor: "blue",
            height: 200,
            width: 200,
            position: "absolute",
            right: "50%",
            bottom: 0,
          }}
        ></div>
      </div>
    </div>
  );
}

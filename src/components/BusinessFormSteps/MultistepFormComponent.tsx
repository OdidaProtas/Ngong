import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./BusinessFormSteps.styles";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface MultistepFormComponentInterface {
  identityStep: any;
  locationStep: any;
  contactStep: any;
}

interface ControlsInterface {
  previous: any;
  next: any;
  step: number;
}

const Controls = ({ step, previous, next }: ControlsInterface) => {
  const classes = useStyles();
  return (
    <div className={classes.controls}>
      <Button
        className={classes.btn}
        size="small"
        onClick={previous}
        disabled={step === 1}
      >
        Previous
      </Button>
      <Button
        className={classes.btn}
        variant="contained"
        size="small"
        type="submit"
      >
        {step === 3 ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default function MultistepFormComponent() {
  const classes = useStyles();
  const [step, setStep] = useState(1);

  const [state, setState] = useState({
    identity: {
      name: "",
      description: "",
      productType: "",
    },
    location: {
      locatuon: "",
      locationDetails: "",
      latitude: "",
      longitude: "",
    },
    contact: {},
  });

  const handleStepChange = (step: any, data: any) => {
    setState((prevState) => ({ ...prevState, [step]: data }));
    console.log(state);
  };

  const isFinal = step === 3;
  const previous = () => setStep((prev) => prev - 1);
  const next = () => setStep((prev) => prev + 1);
  const handleSubmit = (value: any) => {};
  return (
    <div>
      <Typography className={classes.title} variant="h5">
        Set up a business
      </Typography>
      <LinearProgressWithLabel value={step * 33} />
      <Grid container>
        <Grid item xs={12} lg={6}>
          {step === 1 ? (
            <StepOne
              next={next}
              handleSubmit={handleSubmit}
              handleStepChange={handleStepChange}
              controls={(props: any) => (
                <Controls
                  next={next}
                  previous={previous}
                  step={step}
                  {...props}
                />
              )}
            />
          ) : null}
          {step === 2 ? (
            <StepTwo
              next={next}
              handleSubmit={handleSubmit}
              handleStepChange={handleStepChange}
              controls={(props: any) => (
                <Controls
                  next={next}
                  previous={previous}
                  step={step}
                  {...props}
                />
              )}
            />
          ) : null}
          {step === 3 ? (
            <StepThree
              handleSubmit={handleSubmit}
              handleStepChange={handleStepChange}
              controls={(props: any) => (
                <Controls
                  next={next}
                  previous={previous}
                  step={step}
                  {...props}
                />
              )}
            />
          ) : null}
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

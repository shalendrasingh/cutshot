import React, { useState } from "react";
import { Button, Paper, Step, StepLabel, Stepper } from "@mui/material";

import { useForm, FormProvider } from "react-hook-form";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import Logo from "./Logo";
import FirstStep from "../pages/FirstStep";
import SecondStep from "../pages/SecondStep";
import ThirdStep from "../pages/ThirdStep";
import FourStep from "../pages/FourStep";

function getSteps() {
  return ["Step 1", "Step 2", "Step 3", "Step 4"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FirstStep />;

    case 1:
      return <SecondStep />;
    case 2:
      return <ThirdStep />;
    case 3:
      return <FourStep />;
    default:
      return "unknown step";
  }
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    borderColor: "#664DE5",
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#664DE5",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#664DE5",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const MainLayout = () => {
  const methods = useForm({
    defaultValues: {},
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        width: 600,
        height: 600,
        margin: "100px auto",
      }}
    >
      <Logo />
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
        style={{ padding: "25px" }}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#664DE5",
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "grey.500",
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#664DE5",
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                  {
                    color: "grey.700",
                  },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "#fff",
                },
              }}
              {...stepProps}
              key={index}
            >
              <StepLabel {...labelProps}>{/* {step} */}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}

            <Button
              style={{
                width: "100%",
                backgroundColor: "#664DE5",
                height: "50px",
                margin: "15px 0px",
                color: "#fff",
              }}
              variant="contained"
              color="primary"
              type="submit"
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 1
                ? "Launch Eden"
                : "Create Workspace"}
            </Button>
          </form>
        </FormProvider>
      </>
    </Paper>
  );
};

export default MainLayout;

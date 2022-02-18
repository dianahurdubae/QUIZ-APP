import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { questions } from "../../assets/json/questions";
import { IUser } from "../../models/user";
import { IQuestion } from "../../models/question";

const steps = ["1/5", "2/5", "3/5", "4/5", "5/5"];

function Test() {
  const user: IUser = useSelector((state: any) => state.user.value);
  const category: string = user.testCategory;
  const difficulty: string = user.testDifficulty;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const filteredQuestions: Array<IQuestion> = questions.filter(
    (question: IQuestion) =>
      question.category === category && question.difficulty === difficulty
  );
  console.log(filteredQuestions);
  console.log(activeStep);

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              You finished the quiz!
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {filteredQuestions[activeStep].name}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}

export default Test;

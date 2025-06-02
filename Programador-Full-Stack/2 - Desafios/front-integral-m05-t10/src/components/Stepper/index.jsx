import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import stepIconActive from "../../assets/stepIconActive.svg";
import stepIconCompleted from "../../assets/stepIconCompleted.svg";
import stepIconDesable from "../../assets/stepIconDesable.svg";
import "./styles.css";

const StepIconActive = () => <img src={stepIconActive} />;
const StepIconDesable = () => <img src={stepIconDesable} />;
const StepIconCompleted = () => <img src={stepIconCompleted} />;

const steps = [
  {
    label: "Cadastre-se",
    description: `Por favor, escreva seu nome e e-mail`,
  },
  {
    label: "Escolha uma senha",
    description: "Escolha uma senha segura",
  },
  {
    label: "Cadastro realizado com sucesso",
    description: `E-mail e senha cadastrados com sucesso`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/register") {
      setActiveStep(0);
    }
    if (pathname === "/registerPassword") {
      setActiveStep(1);
    }
    if (pathname === "/registerCompleted") {
      setActiveStep(3);
    }
  }, []);

  return (
    <Box sx={{ maxWidth: 400, width: "37.5vw", backgroundColor: "#F0F0F5" }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{ margin: "auto", gap: "5px", paddingTop: "200px" }}
      >
        {steps.map((step, index) => (
          <Step key={step.label} sx={{ color: "green" }}>
            <StepLabel
              StepIconComponent={
                activeStep === index
                  ? StepIconActive
                  : activeStep > index
                  ? StepIconCompleted
                  : StepIconDesable
              }
              optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }
            >
              {step.label}
              <Typography fontFamily={"Nunito"} sx={{ color: "black" }}>
                {step.description}
              </Typography>
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}></Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

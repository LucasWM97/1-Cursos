import NextSteps from "../../components/NextSteps";
import SignUp from "../../components/Sign-up";
import Stepper from "../../components/Stepper";
import "./styles.css";

export function Register() {
  return (
    <div className="container_register">
      <Stepper />
      <SignUp />
      <NextSteps />
    </div>
  );
}

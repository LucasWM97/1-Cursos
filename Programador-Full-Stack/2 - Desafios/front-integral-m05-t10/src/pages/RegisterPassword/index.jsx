import NextSteps from "../../components/NextSteps";
import SignUpPassword from "../../components/Sign-up-password";
import Stepper from "../../components/Stepper";
import "./styles.css";

function RegisterPassword() {
  return (
    <div className="container_register">
      <Stepper />
      <SignUpPassword />
      <NextSteps />
    </div>
  );
}

export default RegisterPassword;

import "./styles.css";
import NextSteps from "../../components/NextSteps";
import Stepper from "../../components/Stepper";
import CardCompleted from "../../components/CardCompleted";

function RegisterCompleted() {
  return (
    <div className="container_register">
      <Stepper />
      <CardCompleted />
      <NextSteps />
    </div>
  );
}

export default RegisterCompleted;

import { useContext } from "react";
import SignUpContext from "../context/SignUpContext";

function UseSignUpForm() {
  return useContext(SignUpContext);
}

export default UseSignUpForm;

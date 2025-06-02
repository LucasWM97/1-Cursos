import { useState } from "react";

function useSignUpFormProvider() {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return {
    signUpForm,
    setSignUpForm,
  };
}

export default useSignUpFormProvider;

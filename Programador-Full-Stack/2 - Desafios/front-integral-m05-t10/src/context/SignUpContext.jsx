import { createContext } from "react";
import useSignUpFormProvider from "../hooks/useSignUpFormProvider";

const SignUpContext = createContext({});

export function SignUpFormProvider({ children }) {
  const providerProps = useSignUpFormProvider();

  return (
    <SignUpContext.Provider value={providerProps}>
      {children}
    </SignUpContext.Provider>
  );
}

export default SignUpContext;

import "./styles/index.css";

import { MainRoutes } from "./routes/Routes";
import { UserProvider } from "./context/Context";

function App() {
  return (
    <>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;

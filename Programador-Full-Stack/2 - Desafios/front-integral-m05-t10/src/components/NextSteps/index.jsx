import "./styles.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function NextSteps() {
  const [pathNameRouter] = useState([
    "/register",
    "/registerPassword",
    "/registerCompleted",
  ]);
  const { pathname } = useLocation();

  return (
    <div className="container_nextSteps">
      {pathNameRouter.map((item) => (
        <div
          key={item}
          style={{
            backgroundColor: item === pathname ? "#0E8750" : "#DEDEE9",
          }}
        ></div>
      ))}
    </div>
  );
}

export default NextSteps;

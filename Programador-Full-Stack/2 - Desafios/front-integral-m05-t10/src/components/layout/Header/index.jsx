import { useEffect, useState } from "react";
import "./styles.css";
import arrowIcon from "../../../assets/arrowIcon.svg";
import exitIcon from "../../../assets/exitIcon.svg";

import { FormModalEditUsers } from "../modalEditUser/modalEditUsers";
import { getUserLogged } from "../../../services/GetUserLogged";
import { Link, useNavigate } from "react-router-dom";
import { redirectToLogin } from "../../../helpers/redirecToLogin";
import { getLocalStorageItem } from "../../../helpers/localStorage";

const Header = ({ titlePage, pageClient, pageClientDetail }) => {
  const token = getLocalStorageItem("token");
  const username = getLocalStorageItem("name");

  const [miniModalOpen, setMiniModalOpen] = useState("hide");

  const handleMiniModalToggle = () => {
    if (miniModalOpen === "hide") {
      setMiniModalOpen("show");
      return;
    }
    setMiniModalOpen("hide");
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await getUserLogged(token);
      if (result && result.redirectToLogin) {
        redirectToLogin(navigate);
      }
      return;
    };

    fetchUserData();
  }, []);

  const pathPage = window.location.pathname;

  return (
    <div className="header-container">
      {pathPage === "/clients" ? (
        <div className="title">
          <h1>{titlePage}</h1>
        </div>
      ) : pathPage === "/charges" ? (
        <div className="title">
          <h1>{titlePage}</h1>
        </div>
      ) : pathPage === "/clientDetail" ? (
        <span className="charges_span_name">
          <div className="title">
            <h1>{titlePage}</h1>
            <h4>
              <Link to={"/clients"}>{pageClient}</Link>
            </h4>
            {pageClientDetail && <span>{">"}</span>}
            <h4>{pageClientDetail}</h4>
          </div>
        </span>
      ) : (
        <div className="title-main-page">
          <h1>{titlePage}</h1>
        </div>
      )}

      {username && (
        <div className="user-info flex-center">
          <div className="user-avatar">
            <div className="user-avatar-circle">
              {username.slice(0, 2).toUpperCase()}
            </div>
          </div>

          {<div className="user-name">{username}</div>}
          <div className="arrow-icon" onClick={handleMiniModalToggle}>
            <img src={`${arrowIcon}`} />
            <div className={`mini-modal ${miniModalOpen}`}>
              <FormModalEditUsers />
              <div className="exit-icon flex-center">
                <img
                  onClick={() => redirectToLogin(navigate)}
                  src={`${exitIcon}`}
                />
                <p>Sair</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

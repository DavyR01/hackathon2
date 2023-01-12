import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/UserContext";

function LogOut() {
  const navigate = useNavigate();
  const { setUser } = useCurrentUserContext();
  const onClick = () => {
    localStorage.clear();
    setUser({});
    navigate("/");
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-800 h-14 w-2/5 buttonExplorer text-white text-center font-medium rounded-lg  px-1 py-1 border hover:scale-105 duration-300 border-black opacity-50 hover:opacity-100 border-2"
    >
      Déconnexion
    </button>
  );
}

export default LogOut;

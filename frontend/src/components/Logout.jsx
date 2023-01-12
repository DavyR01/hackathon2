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
      className="md:ml-4 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
    >
      Log Out
    </button>
  );
}

export default LogOut;

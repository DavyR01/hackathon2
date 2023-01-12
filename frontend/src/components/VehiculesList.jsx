import React from "react";
import "../styles/vehiculesList.css";

function VehiculesList() {
  return (
    <div className="containerCadre">
      <h1 className="m-1.5">Mercedes</h1>
      <button
        type="button"
        className="container-btn p-1 pl-2 pr-2 bg-[#EB6440] text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300"
      >
        Secondary
      </button>
    </div>
  );
}

export default VehiculesList;

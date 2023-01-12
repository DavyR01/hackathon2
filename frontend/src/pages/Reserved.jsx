import React from "react";
import "../styles/Reserved.css";
import Navbar from "../components/Navbar";
import AudiA7 from "../assetsData/audi-a7.png";
// import { AudiA3 } from "module";
// import { BMW3 } from "module";
// import { Caddy } from "module";
// import { Cupra } from "module";
// import { FordTransit } from "module";
// import { Peugeot206 } from "module";
// import { SeatMII } from "module";
// import { GolfGTI } from "module";

function Reserved() {
  return (
    <div className="reservedPage text-center">
      <div className="reservedPageDiv1 flex flex-col items-center">
        <img src={AudiA7} alt="audiA7" />
        <div className="descriptionCar1 bg-gray-200 ">
          <p>
            Marque : <span className="text-blue-800 text-2xl">Audi</span>
          </p>
          <p>
            Modèle : <span className="text-blue-800 text-2xl">A7</span>
          </p>
          <p>
            Type : <span className="text-blue-800 text-2xl">Berline</span>
          </p>
          <p>
            Localisation : <span className="text-blue-800 text-2xl"> Lyon</span>
          </p>
          <p>
            Kilométrage :{" "}
            <span className="text-blue-800 text-2xl">47560 km</span>
          </p>
          <p>
            Carburant : <span className="text-blue-800 text-2xl">Diesel</span>
          </p>
          <p>
            Disponibilité : <span className="text-green-600 text-2xl">Oui</span>
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Reserved;

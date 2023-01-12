import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/vehiculeList.css";
import audi from "../assets/audi.png";
import Modal from "../components/Modal";

function VehiculeList() {
  const [cars, setCars] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    fetch("http://localhost:5000/vehicles")
      .then((res) => res.json())
      .then((vehiclesList) => setCars(vehiclesList));
  }, []);

  return (
    <div className="container flex justify-center flex-col items-center gap-8">
      {cars.map((car) => (
        <div className="containertest bg-white">
          <div className="" key={car.id}>
            <Modal car={car} />
            <h1 className="containerh1"> {car.brand} </h1>
            <div className=" ">
              <h3 className="containerh3"> {car.model}</h3>
            </div>
            <div className="container-techi">
              <h3 className="container-h3">{car.technicalData}</h3>
            </div>
            <div>
              <img className="container-audi" src={audi} alt="audi" />
            </div>
          </div>
          <button
            type="button"
            className="container-btn border border-black text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Primary
          </button>
        </div>
      ))}
      <Navbar />
    </div>
  );
}

export default VehiculeList;

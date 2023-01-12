import React from "react";
import "../styles/Welcome.css";
import { NavLink } from "react-router-dom";
import Car1 from "../assets/car1.jpg";

function Welcome() {
  return (
    <div className="">
      <div className="réservationStart text-lg">
        <div className="containerImageCar text-center">
          <div className="frameWelcome flex justify-center items-center">
            <h1 className="text-white text-2xl pl-8 pr-8">
              BIENVENUE SUR CARGOWHEELS
              <p className="text-base mt-4">
                le site de réservation de voiture number one
              </p>
            </h1>
          </div>
          <img
            className="carImageWelcome inline-block pb-2 item-center margin-auto"
            src={Car1}
            alt="picturePageWelcome"
          />
        </div>
        <button
          type="button"
          className="mb-2 bg-slate-500 text-white font-medium rounded-lg text-xl px-4 py-4 text-center border hover:scale-105 duration-300"
        >
          Accédez aux offres
        </button>
        <br />
        <NavLink to="login">
          <button
            type="button"
            className="bg-red-900 text-white font-medium rounded-lg text-xl px-4 py-4 text-center border hover:scale-105 duration-300"
          >
            SE CONNECTER
          </button>
        </NavLink>

        <p className="pb-2 pt-2">
          Pas encore de compte ? Cliquez{" "}
          <span className="cursor-pointer text-blue-600">
            <NavLink to="register">ici </NavLink>
          </span>
          pour vous inscrire
        </p>
      </div>
    </div>
  );
}

export default Welcome;

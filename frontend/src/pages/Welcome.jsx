import React from "react";
import "../styles/Welcome.css";
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <div className="">
      <div className="réservationStart text-lg">
        <div className="containerImageCar text-center">
          <div className="frameWelcome flex justify-center items-center">
            <h1 className="text-white text-4xl pl-8 pr-8">
              BIENVENUE SUR <br /> CAR-GO WILD
              <p className="text-base mt-4">
                le site de réservation de voiture numéro uno
              </p>
            </h1>
          </div>
          <img
            className="carImageWelcome inline-block pb-2 item-center margin-auto"
            src="./src/assets/car1.jpg"
            alt="picturePageWelcome"
          />
        </div>
        <NavLink to="home">
          <button
            type="button"
            className="opacity-70 mb-2 bg-black hover:opacity-100 text-white font-medium rounded-lg text-xl px-4 py-4 text-center border hover:scale-105 duration-300"
          >
            Accédez aux offres
          </button>
        </NavLink>

        <br />
        <NavLink to="login">
          <button
            type="button"
            className="opacity-70 hover:opacity-100 bg-red-700 text-white font-medium rounded-lg text-xl px-4 py-4 text-center border hover:scale-105 duration-300"
          >
            SE CONNECTER
          </button>
        </NavLink>
        <p className="pb-2 pt-2">
          Pas encore de compte ? Cliquez{" "}
          <span type="button" className=" spanIci text-blue-600">
            <NavLink to="register">ici </NavLink>
          </span>{" "}
          pour vous inscrire
        </p>
      </div>
    </div>
  );
}

export default Welcome;

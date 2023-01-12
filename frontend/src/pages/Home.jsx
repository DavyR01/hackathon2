import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="h-screen">
        <div className="bg-gray-700 rounded-6xl ">
          <h1 className="text-center mt-5 text-3xl text-white py-4">
            Bienvenue chez CarGoWheels !
          </h1>
        </div>
        <div className="mt-10 ">
          <form className="m-auto mt-5">
            <div className="bg-red-900 text-white rounded-6xl mx-2">
              <p className="text-center text-2xl">Type de véhicule</p>
            </div>

            <div className="mb-8 justify-around flex mt-5 bg-gray-300 h-24 ml-4 mr-4 px-4 rounded-2xl ">
              <div className="flex-col ml-2 w-1/3">
                <button
                  className="w-16 h-16 text-xl text-red-900 border-black "
                  type="button"
                >
                  {" "}
                  Berline
                  <img
                    className="h-18 w-18 mt-3"
                    src="./src/assets/berline.svg"
                    alt="berline"
                  />
                </button>
              </div>

              <div className="flex-col w-1/3">
                <button className="w-12 text-xl text-red-900" type="button">
                  {" "}
                  Utilitaire
                  <img
                    className="h-12 w-10 mt-5"
                    src="./src/assets/utilitaire.svg"
                    alt="utilitaire"
                  />
                </button>
              </div>
              <div className="flex-col w-1/3">
                <button className="w-10 text-xl text-red-900" type="button">
                  {" "}
                  Electrique
                  <img
                    className="h-16 w-16 mt-2"
                    src="./src/assets/carelectric.svg"
                    alt="berline"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <p>Date de départ</p>
                <input
                  type="password"
                  placeholder="mot de passe"
                  className="form-control border-solid border-black border-2 px-4 rounded-lg h-10"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <p>Date d'arrivée</p>
                <input
                  type="email"
                  placeholder="email"
                  className="form-control border-solid border-black border-2 px-4 rounded-lg h-10"
                  id="email"
                />
              </div>

              <button
                type="submit"
                className=" h-14 w-44 mt-10 hover:bg-green-600 hover:text-white bg-red-900 text-white border-solid boder-black border-2 rounded-lg"
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
export default Home;

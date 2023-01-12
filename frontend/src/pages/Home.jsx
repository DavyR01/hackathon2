import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="h-screen">
        <h1 className="text-center mt-5 text-5xl">
          Bienvenue chez CarGoWheels !
        </h1>
        <div className="mt-10">
          <form className="m-auto mt-5">
            <p className="text-center text-3xl">Type de véhicule</p>
            <div className="mb-8 flex mt-5 bg-gray-300">
              <div className="flex-col mx-auto">
                <button className="w-1/3 text-xl" type="button">
                  {" "}
                  Berline
                  <img
                    className="h-24 w-12"
                    src="./src/assets/berlinerouge.png"
                    alt="berline"
                  />
                </button>
              </div>
              <div className="flex-col mx-auto">
                <button className="w-1/3 text-xl" type="button">
                  {" "}
                  Utilitaire
                  <img
                    className="h-16 w-16"
                    src="./src/assets/kisspng-van-car-computer-icons-professional-services-5af3da1ab964b2.8835695915259305227594-removebg-preview.png"
                    alt="utilitaire"
                  />
                </button>
              </div>
              <div className="flex-col mx-auto">
                <button className="w-1/3 text-xl" type="button">
                  {" "}
                  Electrique
                  <img
                    className="h-16 w-16"
                    src="./src/assets/electriccar1.png"
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
                className=" h-14 w-44 mt-12 hover:bg-green-600 hover:text-white bg-red-900 text-white border-solid boder-black border-2 rounded-lg"
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

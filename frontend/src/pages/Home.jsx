import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="h-screen">
        <h1 className="text-center mt-5">Bienvenue</h1>
        <div className="mt-10">
          <form className="m-auto mt-5">
            <p className="text-center">Type de véhicule</p>
            <div className="mb-3 flex mt-5">
              <button className="w-1/3" type="button">
                {" "}
                Berline
                <img
                  className="h-28"
                  src="./src/assets/png-clipart-sports-car-computer-icons-vehicle-minivan-car-compact-car-sedan-removebg-preview.png"
                  alt="berline"
                />
              </button>
              <button className="w-1/3" type="button">
                {" "}
                Utilitaire
                <img
                  className="h-28"
                  src="./src/assets/kisspng-van-car-computer-icons-professional-services-5af3da1ab964b2.8835695915259305227594-removebg-preview.png"
                  alt="utilitaire"
                />
              </button>
              <button className="w-1/3" type="button">
                {" "}
                Electrique
                <img
                  className="h-28"
                  src="./src/assets/voiture elec.png"
                  alt="berline"
                />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <p>Date de départ</p>
                <input
                  type="password"
                  placeholder="mot de passe"
                  className="form-control border-solid border-black border-2 rounded-lg h-10"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <p>Date d'arrivée</p>
                <input
                  type="email"
                  placeholder="email"
                  className="form-control border-solid border-black border-2 rounded-lg h-10"
                  id="email"
                />
              </div>

              <button
                type="submit"
                className="h-10 hover:bg-green-600 hover:text-white bg-green-500 text-white border-solid boder-black border-2 rounded-lg"
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

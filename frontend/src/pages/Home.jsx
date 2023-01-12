import React from "react";
import { NavLink } from "react-router-dom";
import Car1 from "../assets/car1.jpg";
import Berline1 from "../assets/berline1.png";
import Berline2 from "../assets/berline2.png";
// import "tw-elements";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      {/* **************************** */}

      <div className="h-screen">
        <h1 className="text-center mt-5 bg-black text-white p-2 text-3xl">
          Veuillez sélectionner vos critères <br /> de recherches
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
            {/* <p className="text-center">Type de véhicule</p>
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
                  src="./src/assets/elec-car.png"
                  alt="berline"
                />
              </button>
            </div> */}
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <p>Date de départ :</p>
                <input
                  type="date"
                  placeholder=""
                  className="text-center form-control border-solid border-black border-2 rounded-lg h-10 w-48"
                  id="dateDepart"
                />
              </div>
              <div className="mb-3">
                <p>Date d'arrivée :</p>
                <input
                  type="date"
                  placeholder=""
                  className="text-center form-control border-solid border-black border-2 rounded-lg h-10 w-48"
                  id="email"
                />
              </div>

              <button
                type="submit"
                className=" h-14 w-44 mt-12 hover:bg-green-600 hover:text-white bg-red-900 text-white border-solid boder-black border-2 rounded-lg"
              >
                Rechercher
              </button>
              <br />
            </div>
          </form>
          {/** ************************* CAROUSEL ********************** */}
          <div
            id="indicators-carousel"
            className="relative pt-6"
            data-carousel="static"
          >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* <!-- Item 1 --> */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src={Car1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 2 --> */}
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img
                  src={Berline1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 3 --> */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={Berline2}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 4 --> */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={Car1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 5 --> */}
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={Car1}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              />
            </div>
            {/* <!-- Slider controls --> */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

          {/* ************************************************** */}
          <div className="text-center">
            <NavLink to="/vehiculelist">
              <button
                type="button"
                className="bg-blue-800 buttonExplorer text-white text-center mb-24 font-medium rounded-lg text-lg px-1 py-1 border hover:scale-105 duration-300 border-black opacity-50 hover:opacity-100"
              >
                EXPLORER LES <br /> DIFFERENTS MODELES
              </button>
            </NavLink>
          </div>
          {/* /***************************** */}
          {/* <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={Berline2} />
              </div>
              <div className="swiper-slide">
                <img src={Berline1} />
              </div>
              <div className="swiper-slide">
                <img src={Car1} />
              </div>
              <div className="swiper-slide">
                <img src={Berline2} />
              </div>
              <div className="swiper-slide">
                <img src={Berline2} />
              </div>
              <div className="swiper-slide">
                <img src={Berline2} />
              </div>
              <div className="swiper-slide">
                <img src={Berline2} />
              </div>
              <div className="swiper-slide">
                <img src={Berline2} />
              </div>
              <div className="swiper-slide">
                <img src={Berline2} />
              </div>
            </div>
            <div className="swiper-pagination" />
          </div> */}
          {/* /***************************** */}
        </div>
      </div>
      <Navbar />
    </div>
  );
}
export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashBoard() {
  return (
    <div>
      {" "}
      <div>
        <div className="w-full h-full">
          <div className="py-2" />
          <div className="flex bg-[#ffc411] w-full justify-between drop-shadow-2xl">
            <div className="flex justify-around flex-wrap md:mx-10">
              <div className="flex flex-wrap">
                <div className="rounded-full w-100 h-100 my-5">
                  <Link to="/dashboard">
                    <img
                      className="border-black rounded-full w-16 h-16 mt-4 mr-8 ml-4"
                      src="./src/assets/berline.svg"
                      alt="userImage"
                    />
                  </Link>
                </div>
              </div>
              <div className="my-5 md:flex md:flex-wrap md:items-center">
                <h2 className="text-2xl">Hello admin !</h2>
                <div className="flex items-center text-xl flex-wrap">
                  Welcome
                </div>
              </div>
            </div>
            <div className="my-2  justify-end px-4">
              <Link to="/">
                <img
                  src="./src/assets/Home.svg"
                  alt=""
                  className=" w-8 h-8 mt-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className=" flex flex-col justify-center bg-gray-100 mt-8">
          <h1 className="text-3xl text-center">Gérez votre compte</h1>
          <div className="mt-8 mx-12  bg-gray-400 py-4 px-4 h-1/2 md:w-1/3 md:mx-auto">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="mb-4">
                <label htmlFor="Nom" className="block font-medium text-sm mb-2">
                  Prénom
                </label>
                <input
                  id="lestname"
                  type="text"
                  required
                  pattern=".+"
                  placeholder="Nom"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                />
              </div>
              <div>
                <label
                  htmlFor="Prénom"
                  className="block font-medium text-sm mb-2"
                >
                  Nom{" "}
                </label>
                <input
                  id="prénom"
                  type="text"
                  required
                  pattern=".+"
                  placeholder="Prénom"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
                />
              </div>
              <div>
                <label
                  htmlFor="Email"
                  className="block font-medium text-sm mb-2"
                >
                  Email{" "}
                </label>
                <input
                  id="e-mail"
                  type="email"
                  required
                  pattern=".+"
                  placeholder="E-mail"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block font-medium text-sm mb-2"
                >
                  Mot de Passe{" "}
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  pattern=".+"
                  placeholder="Mot de passe"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-red-900 text-white m-1 py-1 px-4 mt-8 rounded-lg shadow-lg h-14 w-44 md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
            >
              Connexion
            </button>
          </div>
        </div>
      </form>
      <Navbar />
    </div>
  );
}

export default AdminDashBoard;

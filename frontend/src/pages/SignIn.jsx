import React from "react";

function SignIn() {
  return (
    <div className=" flex flex-col justify-center h-screen w-screen bg-gray-200">
      <h1 className="text-3xl text-center">Connectez Vous</h1>
      <div className="mt-16 mx-12  bg-gray-400 py-4 px-4 h-1/2 md:w-1/3 md:mx-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              pattern=".+"
              placeholder="Email"
              className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-medium text-sm mb-2"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="MDP"
              required
              pattern=".+"
              placeholder="Mot de passe"
              className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="bg-red-900 text-white m-1 py-1 px-4 mt-24 rounded-lg shadow-lg h-14 w-44 md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFC927] hover:text-black"
        >
          Connexion
        </button>
      </div>
    </div>
  );
}

export default SignIn;

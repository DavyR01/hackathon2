import React from "react";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="">
        <h1 className="text-center absolute top-10 left-32">Connectez-vous</h1>
        <form className="m-auto mt-5">
          <div className="mb-3">
            <p>Adresse e-mail</p>
            <input
              type="email"
              placeholder="email"
              className="form-control border-solid border-black border-2 rounded-lg"
              id="email"
            />
          </div>
          <div className="mb-3">
            <p>Mot de passe</p>
            <input
              type="password"
              placeholder="mot de passe"
              className="form-control border-solid border-black border-2 rounded-lg"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="hover:bg-green-600 hover:text-white bg-green-500 text-white border-solid boder-black border-2 rounded-lg"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

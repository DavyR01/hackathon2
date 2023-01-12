import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCurrentUserContext } from "../contexts/UserContext";
import LogOut from "../components/Logout";

function Login() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      // on appelle le back
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate("/home");
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className=" flex flex-col justify-center h-screen w-screen bg-gray-200">
      <h1 className="text-center text-3xl">Connectez-vous</h1>
      <div className="flex justify-center mt-12">
        <div className="mt-16 mx-12  bg-gray-400 py-4 px-4 h-1/2 md:w-1/3 md:mx-auto">
          <form onSubmit={handleSubmit} className="m-auto mt-5">
            <div className="mb-3">
              <p>Adresse e-mail</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="form-control border-solid border-black border-2 rounded-lg h-10 p-4"
                id="email"
              />
            </div>
            <div className="mb-3">
              <p>Mot de passe</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="mot de passe"
                className="form-control border-solid border-black border-2 rounded-lg h-10 p-4 mb-24"
                id="password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="h-14 2/5 mr-2 bg-green-600 opacity-60 hover:opacity-100 hover:text-white  text-white border-solid border-2 rounded-lg hover:scale-105 duration-300 border-black"
              >
                Connexion
              </button>
              <LogOut />
            </div>
          </form>
        </div>
      </div>
      <div>{errorMessage}</div>
      <Navbar />
    </div>
  );
}

export default Login;

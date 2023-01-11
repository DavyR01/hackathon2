import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/UserContext";

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
      fetch("http://localhost:5000/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate("/");
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="">
        <h1 className="text-center absolute top-10 left-32">Connectez-vous</h1>
        <form onSubmit={handleSubmit} className="m-auto mt-5">
          <div className="mb-3">
            <p>Adresse e-mail</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
              className="form-control border-solid border-black border-2 rounded-lg"
              id="email"
            />
          </div>
          <div className="mb-3">
            <p>Mot de passe</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
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
      <div>{errorMessage}</div>
    </div>
  );
}

export default Login;

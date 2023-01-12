import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashBoard() {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [technicalData, setTechnicalData] = useState("");
  const [mileage, setMileage] = useState("");
  const [localisation, setLocalisation] = useState("");

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      model,
      brand,
      technicalData,
      mileage,
      localisation,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/vehicles", requestOptions)
      .then((response) => {
        response.text();
      })
      .catch(console.error);
  };
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
      <form onSubmit={handleForm}>
        <div className=" flex flex-col justify-center bg-gray-100 mt-8">
          <h1 className="text-3xl text-center">Gérez votre compte</h1>
          <div className="mt-8 mx-12  bg-gray-400 py-4 px-4 h-1/2 md:w-1/3 md:mx-auto">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="mb-4">
                <label
                  htmlFor="type de voiture"
                  className="block font-medium text-sm mb-2"
                >
                  Type de voiture
                </label>
                <input
                  onChange={(e) => setModel(e.target.value)}
                  id="Type de voiture"
                  type="text"
                  required
                  pattern=".+"
                  placeholder="Type de voiture"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                />
              </div>
              <div>
                <label
                  htmlFor="Marque"
                  className="block font-medium text-sm mb-2"
                >
                  Marque{" "}
                </label>
                <input
                  onChange={(e) => setBrand(e.target.value)}
                  id="Marque"
                  type="text"
                  required
                  pattern=".+"
                  placeholder="Marque"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
                />
              </div>
              <div>
                <label
                  htmlFor="Kilométrage"
                  className="block font-medium text-sm mb-2"
                >
                  Kilométrage{" "}
                </label>
                <input
                  onChange={(e) => setMileage(e.target.value)}
                  id="Kilométrage"
                  type="text"
                  required
                  pattern=".+"
                  placeholder="Kilométrage"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
                />
              </div>
              <div>
                <label
                  htmlFor="Détails techniques"
                  className="block font-medium text-sm mb-2"
                >
                  Détails techniques{" "}
                </label>
                <input
                  onChange={(e) => setTechnicalData(e.target.value)}
                  id="Détails techniques"
                  type="text"
                  required
                  pattern=".+"
                  placeholder="Détails techniques"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
                />
              </div>
              <div>
                <label
                  htmlFor="Localisation"
                  className="block font-medium text-sm mb-2"
                >
                  Localisation{" "}
                </label>
                <input
                  onChange={(e) => setLocalisation(e.target.value)}
                  id="Localisation"
                  type="text"
                  required
                  pattern=".+"
                  placeholder="Localisaton"
                  className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
                />
              </div>
            </div>
          </div>
          <div className="mb-20 flex justify-between pl-4 pr-4">
            <button type="submit">ajouter</button>
          </div>
        </div>
      </form>
      <Navbar />
    </div>
  );
}

export default AdminDashBoard;

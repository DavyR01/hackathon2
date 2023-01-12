import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import VehiculeList from "./pages/VehiculeList";
import Reserved from "./pages/Reserved";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CurrentUserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <CurrentUserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vehiculelist" element={<VehiculeList />} />
          <Route path="/reserved" element={<Reserved />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContextProvider>
  );
}

export default App;

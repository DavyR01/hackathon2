import { NavLink } from "react-router-dom";
import React from "react";
import { HiHome, HiSearch, HiTable, HiUser } from "react-icons/hi";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="">
      <ul className="flex justify-around mx-auto md:mx-auto md:w-2/3 w-screen fixed bottom-0 inset-x-0 bg-[#D6E4E5] rounded-t-xl z-40">
        <NavLink to="/home">
          <li className="home w-3/4 py-2">
            <HiHome className="home h-12 w-12" />
          </li>
        </NavLink>
        <NavLink to="/vehiculelist">
          <li className="vehiculelist w-3/4 py-2">
            <HiSearch className="vehiculelist h-12 w-12" />
          </li>
        </NavLink>
        <NavLink to="/reserved">
          <li className="reserved w-3/4 py-2">
            <HiTable className="reserved h-12 w-12" />
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className="profil w-3/4 py-2">
            <HiUser className="profil h-12 w-12" />
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;

/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
function Modal({ car }) {
  console.warn(car);
  return (
    <div className="flex justify-center">
      <div className="bg-red-300 w-3/5 flex justify-center">
        <ul>
          <li>{car.localisation}</li>
          <li>{car.mileage}</li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;

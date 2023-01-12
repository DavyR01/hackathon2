/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
function Modal({ car }) {
  console.warn(car);
  return (
    <div>
      <ul>
        <li>{car.model}</li>
        <li>{car.type}</li>
        <li>{car.mileage}</li>
      </ul>
    </div>
  );
}

export default Modal;

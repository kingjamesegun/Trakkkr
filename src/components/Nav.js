import React, {} from "react";
import { Link } from "react-router-dom";

export default function Index() {

  return (
    <div className="container py-3">
      <div className="flex justify-between items-center container">
        <div className="text-3xl text-bold text-sans ">
            Trakker
        </div>
        <div className="text-base font-sans">
          <ul className="uppercase flex space-x-10">
            <li>
              <Link to="/" className="text-black non-style">Home</Link>
            </li>
            <li>
              <Link to="/product" className="text-black">product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

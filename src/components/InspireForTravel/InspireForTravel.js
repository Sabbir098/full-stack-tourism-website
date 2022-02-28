import React from "react";
import "./InspireForTravel.css";
import img1 from '../../asset/images/img1.jpg'
import img2 from '../../asset/images/img2.jpg'
import { useNavigate } from "react-router-dom";

const InspireForTravel = () => {

  let navigate = useNavigate()
  const routeChange = () => {
      let path = `/login`
      navigate(path);
  }
  return (
   <>
    <div className="flex">
      <div className="inspire-text">
        <h2>Book Your Dream Vacation Now</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod te <br /> mpor incididunt ut labo renetdo lore magna aliqua. Ut enim
          ad minim venit, <br /> quis nostrud exercitation ullamco laboris nisiu
          taliquipew xeac ommodo cis <br /> quat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillu
        </p>
        <button onClick={routeChange} className="book-btn">BOOK NOW</button>
      </div>
      <div className="img">
        <img src={img1} alt="" />
      </div>
    </div>
    <div className="second-view">
        <img src={img2} alt="" />
        <h1 className="heading">Summer <br /> Event</h1>
    </div>
   </>
  );
};

export default InspireForTravel;

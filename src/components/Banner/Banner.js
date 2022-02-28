import React from "react";
import './Banner.css';
import bannerVideo from "../../asset/video/banner.mp4";
// import {NavLink as Link } from "react-router-dom";
import InspireForTravel from "../InspireForTravel/InspireForTravel";
import Footer from "../../Shared/Footer/Footer";
import CheckingDate from "../CheckingDate/CheckingDate";
const Banner = () => {
  return (
    <div className="container">
       
        <video autoPlay muted loop >
            <source src={bannerVideo} type='video/mp4' />
        </video>
            <div className="overlay"></div>
        <div className="text">
            <h1 style={{fontSize: '60px', lineHeight: '30px', textTransform:'uppercase'}}>Never stop </h1>
            <h2 style={{fontSize: '50px', textTransform:'uppercase'}}>Exploring the world</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Debitis, provident quaerat. Nihil eos corporis explicabo ea, <br /> aliquam, ipsa repudiandae debitis itaque cum alias exercitationem <br /> praesentium, reiciendis necessitatibus laboriosam quae reprehenderit.</p>
            <button>Explore</button>
        </div>
        <CheckingDate></CheckingDate>
      <InspireForTravel></InspireForTravel>
      <Footer></Footer>
    </div>
    
  );
};

export default Banner;

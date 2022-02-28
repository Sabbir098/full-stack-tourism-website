import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Servic.css';

const Servic = (props) => {
    const {image, countryName, description, price} = props.service;
    let navigate = useNavigate()
  const routeChange = () => {
      let path = `/login`
      navigate(path);
  }
    return (
        <div className='services'>
            <img  src={image} alt="" />
            <h2>{countryName}</h2>
            <p>{description}</p>
            <p className='price-title'>TravelCost ${price}</p>
            <button onClick={routeChange}>BOOK NOW</button>
            
        </div>
    );
};

export default Servic;
import React, { useEffect, useState } from 'react';
import Servic from '../Servic/Servic';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('https://afternoon-sea-17903.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    } , [] )

    return (
        <>
        <h2 className='service-title'>Our Best Services</h2>
        <div className='service-container'> 
                {
                  services.map(service => <Servic
                    id={service._id}
                    service={service}
                  ></Servic>)
                };
    
            </div>
        </>
       
    );
};

export default Services;
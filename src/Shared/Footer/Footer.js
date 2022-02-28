import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <>
             <div className='footer-flex'>
            <div className="about-company">
                <h3>This is GhureAshi</h3> <br />
                <p>GhureAshi is equipped with <br /> <br /> everythig required for an amazing <br /> <br /> campground business website. <br /> <br /> Set up camp now.</p> <br />
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </div>
            <div className="contact">
                <h3>Contact</h3> <br />
                <p>A: Via Venti Settembre, Ireland <br /> <br />
                   P: +31 555 777 83 <br /> <br />
                   App: Viber, WhatsApp <br /> <br />
                   E: kamperen@qode.com</p> <br />
            </div>
            <div className="links">
                <h3>Links</h3> <br />
                 <li>About us</li> <br />
                 <li>Nearby activites</li> <br />
                 <li>Booking</li> <br />
                 <li>Contact us</li> <br />
            </div>
            <div className="news-letter">
                <h3>NewsLetter</h3> <br />
                <p>Sign up for our newsletter <br /> <br /> and get updated about <br />  <br /> our latest promotions</p> <br />

               <input type="email" name="email" placeholder='your email' id="" />
               <button>submit</button>
            </div> 
        </div>

        <div className="copy-right">
         <p>Terms of Use I Privacy Policy</p>
         <p>© 2021 Qode Interactive, All Rights Reserved</p>
     </div> 

      </>
    );
};

export default Footer;
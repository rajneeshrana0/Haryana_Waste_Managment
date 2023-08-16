import React from "react";
import "../index.css";
import goh_logo from "../Assets/Images/goh-logo.png";
import satymev from "../Assets/Images/satymev.png";
import flag from "../Assets/Images/wave_flag.webp";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
            <>
                 {/* <!-- Header --> */}
   <section className="header">
    <div className="goh_logo">
        <img src={goh_logo} alt=""/>
        <h3>Government of Haryana</h3>
    </div>
    <div className="languageTranslator">
        <select onchange="changeLanguageByButtonClick()" id="google_translate_element">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
        </select>
    </div>
   </section> 


   {/* <!-- Navbar with photo --> */}

   <section className="navbar">
    <img src={satymev} alt="satyamev"/>        
   <h2>SWACHH BHARAT MISSION</h2>
   <div className="flag">
    <img src={flag} alt="SATYAMEV"/></div>
</section>



{/* <!-- Navigation --> */}
<header className="navba">
    <div className="links">
      <Link to="/" >Home</Link>
      <a href="#">About</a>
      <a href="#">Vision Mission</a>
      <a href="#">Contact Us</a>
      <a href="#">Help</a>
      <a href="#">FAQ</a>
      <Link to="/login">Login</Link>
      </div>
      <div className="loginLinks">
        
      </div>
</header> 
            </>
);
    
}
export default Navbar;
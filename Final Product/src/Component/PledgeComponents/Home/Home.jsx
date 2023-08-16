import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "./plege.png";
import img2 from "./swachha.jpeg";
import img3 from "./fbackground.PNG";

const Home = () => {
  return (
   <>
   <div className='img_set'>
      <div className="nav">
        <div className="logo">
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
        </div>
    </div>
  <div className="banner">
   <img src={img3} alt=""/>
  </div>
  <div className="wastefree">
    <h2>WASTE FREE HARYANA </h2>
    <h2>A Clean and green country is our dream</h2>
  </div>

<div className='form_link'>
 <Link to="/form">Take Pledge</Link>
</div>
  <div className="mail">
    <h5>If already taken pledge get the certificate</h5>
    <div className="certificates">
      <div className="cert1">
    <i className="fa-solid fa-envelope" style={{color: "#0840a1;"}}></i>
    <Link to="/Home/cert" >Send certificate to your Email | Mobile</Link>
  </div>
  <div className="cert1">
    <i className="fa-regular fa-circle-down" style={{color: "#0d3d91"}}></i><Link to="/Home/cert" target='_blank'>Download Certificate</Link>
  </div>
  </div>
</div>
</div>
   </>
  )
}

export default Home

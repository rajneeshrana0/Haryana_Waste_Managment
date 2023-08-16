import React from 'react'
import img1 from "./swachha.jpeg";
import { Link } from "react-router-dom";
import "./Cert.css";

const Cert = () => {
  return (
   <>
     <div class="certificate">
        <img src={img1} alt=""/>
    </div>
    <div class="buttons">
        <Link>Send certificate to your mobile | Email</Link>
        <Link>Download Certificate</Link>
        <Link>Share with Facebook</Link>
        <Link>Share with Twitter</Link>
    </div>
   </>
  )
}

export default Cert

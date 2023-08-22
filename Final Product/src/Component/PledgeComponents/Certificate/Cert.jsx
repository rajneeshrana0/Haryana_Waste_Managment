import React from 'react'
import { Link } from "react-router-dom";
import "./Cert.css";
import logo from './logo.png';
import jsPDF from 'jspdf';
import {Name} from '../Form/Form'
const Cert = () => {
//  console.log(userName);
  let name = Name;
    let date = new Date();
    let todayDate = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    let generatePDF = () =>{
        var doc = new jsPDF('l','pt','a4');
        doc.html(document.querySelector(".certificate"),{
            callback:function(pdf){
                pdf.save("waste.pdf");
            }
        });
    };


  return (
   <>
     <div class="certificateContainer">
     <div className='certificate'>
     <img src={logo}  alt='logo'></img>
     <h1>Certificate of Appreciation</h1>
     <p>
        This Certificate proudly Presented to  <br></br>
        <b><u>{name}</u></b> <br>
        </br>

        Vision
        To Restore our ‘natural heritage’ and drive ‘climate action’.

        Mission
        To empower individuals & communities with proper knowledge, tools and support to initiate responsible production, consumption and waste management journey.
      </p>
      <h5>Date : {todayDate} </h5>
     </div>
     </div>
    <div class="buttons">
        <Link>Send certificate to your mobile | Email</Link>
        <Link onClick={generatePDF}>Download Certificate</Link>
        <Link>Share with Facebook</Link>
        <Link>Share with Twitter</Link>
    </div>
   </>
  )
}

export default Cert

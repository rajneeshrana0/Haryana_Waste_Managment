import React from 'react'
import jsPDF from 'jspdf';
import './certificate.css';
import logo from './logoCertificate.png';



export default function Certificate() {
     
   
    let name =' Ankit';
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
      <br></br>
     
    </div>

    <button className='certificateBtn' onClick={generatePDF}>PDF</button>
    </div>
    </>
  )
}

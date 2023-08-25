import React, {useEffect,useState} from 'react'
import jsPDF from 'jspdf';
import './certificate.css';
import logo from './logoCertificate.png';
import { database , firestore } from '../../Backend/firebase';
import { collection ,query,where ,getDocs} from "firebase/firestore"

export default function Certificate() {

  const userDataRef = collection(firestore,"userData");
  const [userEmail,setUserEmail] = useState("Set User Email");
 
  useEffect(()=>{
    // console.log(database.currentUser.email);
    setUserEmail(database.currentUser.email);
  })

 
console.log(userEmail);

  const q = query(userDataRef,where("Email","==",userEmail));

   const [userName , setUserName] = useState("First Login");
   
   useEffect( () => {
     const getUserName = async () => {
       try{

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=> {
        // console.log(doc.id," => ",doc.data().name);
        setUserName(doc.data().name);
      })

    }catch(err){
      console.log("Error "+err);
    }
    
  }
  getUserName();
} ,)
// console.log(userName); 

    let name =userName;
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
    <div className="certificateContainer">
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

    <button className='certificateBtn' onClick={generatePDF}>Download PDF</button>
    </div>
    </>
  )
}

import React from 'react';
import img1 from "./fbackground.PNG";
import { Link } from 'react-router-dom';
import "./Read.css";
const Read = () => {
    // let title=document.querySelector('.pledge');
    // let name="Mahatma Gandhi dreamt of an India which was not only free but also clean.";
    // let index=1;
    // const typewriter=()=>{
    //     let new_title=name.slice(0,index);
    //     title.innerText=new_title;
    //     index++;
    //     setTimeout(()=>typewriter(),50);
    // }
  
    // typewriter();
  return (
<>
<div className='main_body'>
<div class="read_img">
    <img src={img1} alt=''/>
    <div class="wfh">
      <p>WASTE FREE HARYANA </p>
      <p>A Clean and green country is our dream</p>
    </div>
  </div>  

   <div class="read">
    <h2>Read Pledge</h2>
<div class="read_pledge">
  
    <li class="pledge">Mahatma Gandhi dreamt of an India which was not only free but also clean and
    developed.</li>
    <li>    Mahatma Gandhi secured freedom for Mother India.
    </li>
  <li>    Now it is our duty to serve Mother India by keeping the country neat and clean.
</li>
<li>
    I take this pledge that I will remain committed towards cleanliness and devote
    time for this.</li>
   <li>    I will devote 100 hours per year, that is two hours per week, to voluntarily work
    for cleanliness.</li>
    <li>    I will neither litter not let others litter.
    </li>
    <li>
        I will initiate the quest for cleanliness with myself, my family, my locality, my
        village and my work place.</li>
        <li>
            I believe that the countries of the world that appear clean are so because their
            citizens don't indulge in  littering nor do they allow it to happen.
        </li>
        <li>
            With this firm belief, I will propagate the message of Swachh Bharat Mission in
            villages and towns.</li>
            <li> I will encourage 100 other persons to take this pledge which I am taking today.
            </li>
     <li> I am confident that every step I take towards cleanliness will help in making my
        country clean.
       </li>  
       
</div>
<div className='read_btn'><Link to="/form">I Pledge</Link></div>

  </div>
</div>
</>
  )
}

export default Read;

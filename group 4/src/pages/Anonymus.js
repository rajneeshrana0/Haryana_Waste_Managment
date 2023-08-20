import React,{useState} from 'react';
import './Anonymus.css';
import Swal from 'sweetalert2'
//import bg4 from './images.png/bg4.png';
function Anonymus () {
  const Submit = () =>{
    Swal.fire({
      position:'top',
      icon:'success',
      title: 'Thank You!. ',
      text:'Your Complaint has been successfully submitted. Your compliant will be reviewed by our team and we will solve your problem as soon as possible.',
    
    })
  }
  const [user,setUser]=useState({
    time:"",
    Service:"",
    date:"",
    Mobile:"",
    complain:"",
    
    ContactYou:"",
  
});

let name,value;
const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;
    setUser({...user,[name]:value});
}

const postData=async(e)=>{
  e.preventDefault();
  const { 
    time,
    Service,
    date,
    Mobile,
    complain,
    ContactYou,
    }=user;
const res=await fetch(
  "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com/Anonymus.json",
{
  method:"POST",
  headers:{
      "Content-Type":"application/json",
  },
  body:JSON.stringify({
    time,
    Service,
    date,
    Mobile,
    complain,
    ContactYou,
  }),
  });
  }
  
  return (
    <div class="container">
             <form onSubmit={postData}>
        <fieldset>
        <center>
      <h1>Anonymus Compliant Form </h1>
 <h4>If you fill this form. You can't be able to track your complaint status and your identity will be anonymus/hide.</h4>
      </center>
        <div> <label id='Date-Month-Year'><sup><font color='red'>*</font></sup> 
        <b>Date and Time Occur</b> </label> <br></br> 
         <input type="date" id="date" name="date" value={user.date} onChange={getUserData} placeholder='DD-MM-YYYY'></input>
         <input type="time" name="time" id="time" value={user.time} onChange={getUserData}  placeholder='Hours:Minutes:Seconds'></input> 
        </div>
        <br>
        </br>
        <div>
          <label id="Select Your service"><sup><font color="red">*</font></sup><b>Select Your Service</b></label> <br></br>
          <select name="Service" onChange={getUserData}>
         <option value="-----Select-----">Select</option>
         <option value="-----Waste Audit and Consultation-----">Waste Audit and Consultation</option>
         <option value="-----Recycling Services-----">Recycling Services</option>
         <option value="-----Education and Awareness Campaigns-----">Education and Awareness Campaigns</option>
         <option value="-----Waste and Segregation-----">Waste and Segregation</option>
         <option value="-----Composting Service-----">Composting and Services</option>
         <option value="-----Waste-to-Energy Service-----">Waste-to-Energy Services</option>
         <option value="-----Reusable Products Distribution-----">Reusable Products Distribution</option>
         <option value="-----Community Collections Points-----">Community Collections Points</option>
         <option value="-----Waste Tracking and Reporting-----">Waste Tracking and Reporting</option>
         <option value="-----Collaboration with Businesses and Organizations-----">Collaboration with Businesses and Organizations</option>
         <option value="-----Research and Innovations-----">Research and Innovations</option>
         <option value="-----Others-----">Others</option>
          </select>
        </div>
        <br>
        </br>
        <div>
         <label id="describe Your Complaint/Problems"><sup><font color="red">*</font></sup><b>Describe Your Complaint/Problems </b> </label>
         <br></br>
         <textarea cols='100' rows="6" maxLength="10000"  name="complain" value={user.complain} onChange={getUserData} placeholder='Describe Your Compliant/Problems'> </textarea> 
         </div>
         <br>
         </br>
        <div>
          <label id="ContactYou"><sup><font color="red">*</font></sup><b>ContactYou</b></label> <br></br>
          <select name="ContactYou" onChange={getUserData}>
            <option value="----Select----">Select</option>
            <option value="----Yes----">Yes</option>
            <option value="----No----">No</option>
          </select>
        </div>
        <br>
        </br>
        <div>
        <label id="Mobile_Number"> <b>Mobile Number </b> </label> <br></br>
        <input type="text" maxLength="10" name="Mobile"  value={user.Mobile} onChange={getUserData} id="Mobile" placeholder='Enter your Phone Number'></input>
        </div>
        <br>
        </br>
        <div>
          <center>
          <button onClick={Submit}>Submit</button> 
          <br>
          </br>
          <br>
          </br>
            <div> <button type="cancel">Cancel</button> </div>
          </center>
        </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Anonymus;

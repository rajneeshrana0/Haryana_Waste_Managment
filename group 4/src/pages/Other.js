import './Other.css';
import React,{useState} from 'react';
import Swal from 'sweetalert2'
function Other() {
  const Submit = () =>{
    Swal.fire({
      position:'top',
      icon:'success',
      title: 'Thank You!. ',
      text:'Your Complaint has been successfully submitted. Your compliant will be reviewed by our team and we will solve your problem as soon as possible.',
    
    })
  }
  const [user,setUser]=useState({
    email:"",
    address:"",
    fullname:"",
    age:"",
    occupation:"",
    district:"",
    service:"",
    Mobile:"",
    complain:"",
    file:"",   
});
let name,value;
const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;
    setUser({...user,[name]:value});
}
const postData=async(e)=>{
    e.preventDefault();
    const { email,
      address,
      age,

      occupation,
      district,
     
      service,
      Mobile,
      complain,
      file,
      }=user;
const res=await fetch(
    "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com/Other.json",
{
method:"POST",
headers:{
    "Content-Type":"application/json",
},
body:JSON.stringify({
  email,
  address,
  age,
 occupation,
  district,
 
  service,
  Mobile,
  complain,
  file,  
}),
});
}

  return ( 
   
  <div class="container">  
  <form onSubmit={postData}>
  <fieldset>
  <legend>Waste Management</legend> 
  <center><div class="head"><h1>Other Complaint</h1></div></center>
  <label htmlFor='fullname'>Name: </label>
  <input type='text' id='fullname' name='fullname' value={user.fullname} onChange={getUserData} placeholder='First and Last name' required></input><br></br>
  
  <label htmlFor='fullname'>Age:</label>
  <input type='text' id='age' name='age'   value={user.age} onChange={getUserData} placeholder='Enter your Age' required></input><br></br>

  <label htmlFor='address'>Address:</label>
  <input type='text' id='address' name='address'  value={user.address} onChange={getUserData} placeholder='Enter your Address' required></input><br></br>

  <label htmlFor="District">Select District:</label>
  <select name="District"  onChange={getUserData} >
<option >----Select-----</option>
<option value="	Ambala">	Ambala</option>
<option value="	Bhiwani">	Bhiwani</option>
<option value="	Faridabad">	Faridabad</option>
<option value="	Fatehabad">	Fatehabad</option>
<option value="	Gurgaon">	Gurgaon</option>
<option value="	Hisar">	Hisar</option>
<option value="	Jhajjar">	Jhajjar</option>
<option value="	Jind">	Jind</option>
<option value="	Kaithal">	Kaithal</option>
<option value="	Karnal">	Karnal</option>
<option value="	Kurukshetra">	Kurukshetra</option>
<option value="	Mahendragarh">	Mahendragarh</option>
<option value="	Mewat">	Mewat</option>
<option value="	Palwal">	Palwal</option>
<option value="	Panchkula">	Panchkula</option>
<option value="	Panipat">	Panipat</option>
<option value="	Rewari">	Rewari</option>
<option value="	Rohtak">	Rohtak</option>
<option value="	Sirsa">	Sirsa</option>
<option value="	Sonipat">	Sonipat</option>
<option value="	Nuh">	Nuh</option>
<option value="	Yamunanagar">	Yamunanagar</option>
</select>
                 
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation"   onChange={getUserData}>
          <option value="----Select-----">----Select-----</option>
            <option value="student">Student</option>
            <option value="employee">Govt.Employee</option>
            <option value="employee">Private Employee</option>
            <option value="employee">Self-Employee</option>
            <option value="employee">House-Wife</option>
            <option value="other">Other</option>
          </select>
          

  <label htmlFor='service'>Type of Service:</label>
  <select name="service"  onChange={getUserData} >
  <option >Select type</option>
    <option >Request</option>
    <option >Complaint</option>
  </select><br></br>

    <label htmlFor='availability'>Available:</label>
    <select name="service"  onChange={getUserData} >
    <option >Select</option>
    <option >Yes</option>
    <option >No</option>
    </select><br></br>


  <label htmlFor='MobileNo.'>Mobile No: </label>
  <input type='text' name='Mobile' value={user.Mobile} onChange={getUserData} id='Mobile' placeholder='Enter your mobile No.'></input><br></br>

  <label htmlFor='Email-Address'>Email Address: </label>
  <input type="email" name='email' id='Email Address'  value={user.email} onChange={getUserData} placeholder='Enter your E-mail'></input><br></br>

  <label htmlFor='DescribeYourProblem'>Describe Your Complaint: </label>
  <textarea cols='50' rows='6' name="complain" value={user.complain} onChange={getUserData} placeholder='Give few more information '></textarea><br></br><br></br>
  
  <label htmlFor='photo'>Upload Photo: </label>
  <input type="file"  name='file' value={user.file} onChange={getUserData} ></input><br></br>
 <center><button onClick={Submit}>Submit</button></center>
  </fieldset></form>
  </div>  

  );
}
export default Other;

import React,{useState} from 'react';
import './Selfform.css';
import Swal from 'sweetalert2'
  
    const Self = () => {
      const [sequenceNumber, setSequenceNumber] = useState("");
    
      const generateSequenceNumber = () => {
        const randomNumber = Math.floor(Math.random() * 9999) + 1000;
        const randomNumberString = randomNumber.toString().slice(0, 8);
        setSequenceNumber(randomNumberString);
      
      
      };
    
      const handleSubmit = () => {
        const randomNumberString = generateSequenceNumber();
        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          position: 'top',
          text: 'Your Complaint has been successfully submitted. Your complaint will be reviewed by our team, and we will solve your problem as soon as possible.',
          randomNumber:' Math.floor(Math.random() * 9999) + 1000;',
        });
      };
    
  const [user,setUser]=useState({
    email:"",
    address:"",
    fullname:"",
    age:"",
    city:"",
    district:"",
    state:"",
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
      city,
      district,
      state,
      service,
      Mobile,
      complain,
      file,  }=user;
const res=await fetch(
    "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com/SelfForm.json",
{
method:"POST",
headers:{
    "Content-Type":"application/json",
},
body:JSON.stringify({
  email,
  address,
  age,
  city,
  district,
  state,
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
  <legend>Self Complain</legend> 
  <center><div class="head"><h1>Complaint Form</h1></div></center>
  <label htmlFor='fullname'>Name: </label>
  <input type='text' id='fullname' name='fullname' value={user.fullname} onChange={getUserData} placeholder='First and Last name' required></input><br></br>
  
  <label htmlFor='fullname'>Age:</label>
  <input type='text' id='age' name='age'   value={user.age} onChange={getUserData} placeholder='Enter your Age' required></input><br></br>

  <label htmlFor='address'>Address:</label>
  <input type='text' id='address' name='address'   value={user.address} onChange={getUserData} placeholder='Enter your Address' required></input><br></br>

  <label htmlFor='city'>City:</label>
  <select name="city" onChange={getUserData} >
  <option  >Select city</option>
    <option value="Panipat">panipat</option>
    <option value="Sonipat">Sonipat</option>
    <option value="Samalkha">Samalkha</option>
    <option value="Karnal" >Karnal</option>
  </select><br></br>
  <label htmlFor='district'>District:</label>
  <select name="district"  onChange={getUserData}>
  <option >Select District</option>
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
<option value="	Yamunanagar">	Yamunanagar</option>
<option value="	NUH">	NUH</option>
  </select><br></br>

  <label htmlFor='state'>State:</label>
  <select name="state"  onChange={getUserData}>
  <option >Select state</option>
    <option value="Haryana">HARYANA</option>
  </select><br></br>

  <label htmlFor='service'>Type of Service:</label>
  <select name="service" onChange={getUserData}>
  <option >Select type</option>
    <option value="Request" >Request</option>
    <option value="Complaint">Complaint</option>
  </select><br></br>

    <label htmlFor='availability'>Available:</label>
    <select name="availability" onChange={getUserData}>
    <option >Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
    </select><br></br>
    <label htmlFor='MobileNo.'>Mobile No: </label>
  <input type='text' name='Mobile'  value={user.Mobile} onChange={getUserData} id='Mobile'></input><br></br>

  <label htmlFor='Email-Address'>Email Address: </label>
  <input type="email" name='email'   value={user.email} onChange={getUserData} id='Email Address'></input><br></br>

  <label type="text-area">Describe Your Complaint: </label><br></br>
  <textarea cols='100' rows='6' name="complain" value={user.complain} onChange={getUserData}></textarea><br></br>
  
  <label htmlFor='photo'>Upload Photo: </label>
  <input type="file"  name='file' value={user.file} onChange={getUserData}></input><br></br>
 <center>
 <p>The sequence number is: {sequenceNumber}</p>

      <button onClick={handleSubmit} onEvent={Swal.fire}>Submit</button>

</center>
    
  </fieldset>
  </form>
  </div>  
 
  );
}

export default Self;  

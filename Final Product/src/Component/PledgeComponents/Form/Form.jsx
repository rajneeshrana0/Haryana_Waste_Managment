import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import "./Form.css";


 let Name = "First Fill the form";
const Login = () => {
const [users,setUsers]=useState({
        FirstName:"",
        lastName:"",
        email:"",
        gender:"",
        password:"",
        state:"",
        date:"",
        district:"",
        mobile:"",
        city:"",
        pincode:"",
    });
    const getUsersData=(e)=>{
        const {name,value,type,checked}=e.target;
        setUsers({...users,[name]:type === "checkbox" ? checked : value});

       
    }

  
    
    const postData=async(e)=>{
        e.preventDefault();

        const { FirstName,
            lastName,
            email,
            gender,
            password,
            state,
            date,
            district,
            mobile,
            city,
            pincode}=users;
    const res=await fetch(
        "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com/pledge_form.json",
{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        FirstName,
        lastName,
        email,
        gender,
        password,
        state,
        district,
        date,
        mobile,
        city,
        pincode,
    }),
});

let CertName = users.FirstName+" "+lastName;
findUserName(CertName);

}

  return (
  <> 
       <div className="container">
        <center><h2>Pledge Registration form</h2></center>
        <div className="form-container">
            <form>
                 <div className="input-name">
                 <div className='make_flex'>
                <i className="fa fa-user"></i>
                <input type="text" 
                placeholder=" First Name"
                 name="FirstName"
                 value={users.FirstName}
                 onChange={getUsersData} />
                 </div>
          <div className='make_flex'>
                    <i className="fa fa-user"></i>
                    <input type="text" placeholder=" Last Name" 
                      name="lastName"
                 value={users.lastName}
                 onChange={getUsersData} required />
               
                </div>
                </div>

                <div className="gender">
                    <div className="cont1">
                    <i className="fa-regular fa-user"></i>
                   <h4>Gender :</h4>
                </div>
                <div className="cont2">
            <input type="radio" id="check-male" name="gender"
            value="male"
            checked={users.gender==="male"}
            onChange={getUsersData} />
            <label for="check-male">Male</label>
            <input type="radio" id="check-female" name="gender" 
            value='female'
            checked={users.gender==="female"}
                onChange={getUsersData}
            />
            <label for="check-female">Female</label>
            <input type="radio" id="check-other" name="gender"
            value='other' 
            checked={users.gender==="other"}
                onChange={getUsersData}
            />
            <label for="check-other">Others</label>
        </div>
            </div>


            <div className="input-name">
            <div className='make_flex'>
            <i className="fa-solid fa-calendar-days"></i>
            <h4>DOB</h4>
        <input type="Date" name='date' value={users.date}
            onChange={getUsersData}
        />
        </div>
            <div className="make_flex">
                <i className="fa fa-envelope email"></i>
                <input type="text" placeholder="Email" 
                name='email'
                value={users.email}
                    onChange={getUsersData} required
                />
</div>
</div>

 
            <div className="input-name">
            <div className='make_flex'>
                <i className="fa fa-globe"></i>
                
                <select className="State" onChange={getUsersData}
                value={users.country} name='state' required>
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    </select>
                    </div>
                    <div className='make_flex'>
                <i className="fa fa-location"></i>
                <input type="text" placeholder="District"
                name='district'
                value={users.district}
                onChange={getUsersData} required />
</div>
            </div>

               
            <div className="input-name">  
            <div className='make_flex'>                          
                <i className="fa fa-city"></i> 
                <input type="text" placeholder="City"
                    name='city' 
                value={users.city}
                onChange={getUsersData} required  />
          </div>
          <div className='make_flex'>
                <i className="fa-sharp fa-regular fa-calendar-week"></i>
                <input type="*" placeholder="Pincode"
                    name='pincode'
                value={users.pincode}
                onChange={getUsersData} required />
                </div>
                </div>
            

            <div className="input-name">
            <div className='make_flex'>  
                <i className="fa fa-mobile"></i>
                <input type="text" placeholder="Mobile no." 
                    name='mobile'
                value={users.mobile}
                onChange={getUsersData} required />
                </div>
             <div className='make_flex'>  
                <i className="fa fa-lock"></i>
                <input type="password" placeholder="Password"
                    name='password'
                value={users.password}
                onChange={getUsersData} required />
                </div>
                </div>
               
                <div className='btns'>
                <div className='linking'><a href="" target="_blank" onClick={postData}>Submit Data</a>
                </div>
                <div className='language'><Link to="/form/certi" >Proceed for Certificate</Link>
                </div>
                    </div>

            </form> 
        </div>
    </div>
  </>
  )
} 

let findUserName = (name) =>{
   Name = name;
   return Name;
}
export {Name}
export default Login

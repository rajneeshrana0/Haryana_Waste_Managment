import React from 'react'
import WMLogo from "../Images.png/WMLogo.png";
import { Link } from "react-router-dom";
export const Complaint = () => {
    const [complaintType, setComplaintType] = React.useState("");

    const handleChange = (event) => {
      setComplaintType(event.target.value);
    };
  return (
    <div>
          <div> <center>
        <img src={WMLogo} alt="" width="400px" height="200px"/> 
     </center>
      </div>
      <div> <center>
        <h1>Types of Complaint Form</h1>
        </center>
      </div>
      <div class="radio-buttons">
      {/* <Link to="/"></Link> */}
      <Link to="/self">
        <input
          type="radio"
          name="complaintType"
          value="self"
          checked={complaintType === "self"}
          onChange={handleChange}
       />
      </Link>
        <label>Self</label>
      
      </div>
      <div class="radio-buttons" >
      <Link to="/anonymus">
        <input
          type="radio"
          name="complaintType"
          value="anonymus"
          checked={complaintType === "anonymus"}
          onChange={handleChange}
          
        />
       </Link>
        <label>Anonymous</label>
      </div>
      <div class="radio-buttons">
      <Link to="/Other">
        <input
          type="radio"
          name="complaintType"
          value="Other"
          checked={complaintType === "Others"}
          onChange={handleChange}
        />
        </Link>
        <label>Others</label>
        
      </div>
    </div>
  )
}
export default Complaint;
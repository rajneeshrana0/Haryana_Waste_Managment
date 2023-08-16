import React, { useState } from "react";
import { firestore } from "../Backend/firebase";
import { useNavigate ,Link} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Login&signup.css";
// import firestore from  "../Backend/firebase"

const Signup = () => {
  const history = useNavigate();
  const [users, setUsers] = useState({
    name: "",
    email: "",
    number:"",
    password: "",
    c_password: "",
  });

  let name, value;
  const getUsersData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUsers({ ...users, [name]: value });
  };

  const { password, c_password } = users;
  if (password.value != c_password.value) {
    alert("Password didn,t match");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //  For Authentication
    const { email, password } = users;
    createUserWithEmailAndPassword(firestore, email, password)
      .then((data) => {
        console.log(data, "authData");
        history("/signup");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  const postData = async (e) => {
    const { email, password, name,number } = users;
    const res = await fetch(
      "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com/registration_of_new_users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          number,
        }),
      }
    );
  };
  return (
    <>
      <section className="login_container">
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit} method="POST" autoComplete="off">
              <h2>SignUp</h2>
              <div className="inputbox">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={users.name}
                  onChange={getUsersData}
                  required
                />
                <label for="">Name</label>
              </div>
              <div className="inputbox">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={users.email}
                  onChange={getUsersData}
                  required
                />
                <label for="">Email</label>
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                  value={users.number}
                  onChange={getUsersData}
                  required
                />
                <label for="">Phone Number</label>
              </div>
              <div className="otp">
              <button >Send OTP</button>
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  placeholder="OTP"
                  name="otp"
                  value={users.otp}
                  onChange={getUsersData}
                  required
                />
             
                <label for="">OTP</label>
              </div>
              <div className="otp">
              <button >Verify OTP</button>
              </div>
              <div className="inputbox">
                
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={users.password}
                  onChange={getUsersData}
                  required
                />
                <label for="">Password</label>
              </div>
              <div className="inputbox">
                
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="c_password"
                  value={users.c_password}
                  onChange={getUsersData}
                  required
                />
                <label for="">Confirm Password</label>
              </div>
              <div className="already_account">
              <h3>Already Have Account <Link to="../">Signin</Link></h3>
              </div>
              <br/>
              <div className="multiple-button">
             <div className="otp">
              <button onClick={postData}>Register</button>
              </div>
             <div className="otp">
              <button >Individual</button>
              </div>
             <div className="otp">
              <button >Group</button>
              </div>
             <div className="otp">
              <button >Employee</button>
              </div>
            </div>
             
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

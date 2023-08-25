import React, { useState ,useEffect} from "react";
import { database} from "../Backend/firebase";
import { useNavigate , Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login&signup.css";
import {collection,doc,setDoc,query,where,getDocs,getDoc} from 'firebase/firestore'
import { firestore } from "../Backend/firebase";


const Login = () => {
  
 
  const userRef = collection(firestore,"userData");
  
  const history = useNavigate();
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const getUsersData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = users;
    signInWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        alert("Right");
        // history(/)
      })
      .catch((error) => {
        alert("Wrong");
      });
  };
  const postData = async (e) => {
    const { email, password } = users;
    const res = await fetch(
      "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com/loginform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
  };



  const q1 = query(collection(firestore,"userData"), where (
    "email","==","sagarpawar@gmail.com"
  ))


  const queryFun = async () => {
    const querySnapshot = await getDocs(q1);
    querySnapshot.forEach((doc) => {
      console.log(doc.data().name);
    })
  }
  queryFun();
  return (
    <>
      <section className="login_container">
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit} method="POST" autoComplete="off">
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
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
                <ion-icon name="lock-closed-outline"></ion-icon>
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
              <div className="forget">
                <label for="">
                  <input type="checkbox" />
                  Remember Me <Link to="">Forget Password</Link>
                </label>
              </div>
              <div className="otp">           
                 <button onClick={postData}>Log in</button></div>
              <div className="register">
                <p>
                  Don't have a account <Link to="/Signup">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

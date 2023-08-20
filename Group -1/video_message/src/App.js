import React, { useState, useRef } from 'react';
import { CButton, CCard, CCardBody, CCollapse, CRow, CCol } from '@coreui/react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SideNav from './sidenav';

import Navbar from './sidebar/Navbar';
import Home from './pages/home';
import Reports from './pages/reports';
import Products from './pages/products';

function App() {

  const videoRef = useRef();
  const [visibleA, setVisibleA] = useState(false);
const [visibleB, setVisibleB] = useState(false);
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  
  // slide show
 
  // end slide show
  return (
    <>
    
  <link rel="stylesheet" href="C:\Users\USER\OneDrive\Documents\college internship\waste free project\style2.css"/>
  <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
     {/* <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router> */}
      
       <SideNav/>
       
      {/* <div classname="sidebar">
        <div classname="logo-details">
          <i classname="bx bxl-c-plus-plus icon" />
          <div classname="logo_name">Video message</div>
          <i classname="bx bx-menu" id="btn" />
        </div>
        <ul classname="nav-list">
          <li>
            <i classname="bx bx-search" />
            <input type="text" placeholder="Search..." />
            <span classname="tooltip">Search</span>
          </li>
          <li>
            <a href="#">
              <i classname="bx bx-grid-alt" />
              <span classname="links_name">Dashboard</span>
            </a>
            <span classname="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="C:/Users/admin/Desktop/minor project.html">
              <i classname="bx bx-user" />
              <span classname="links_name">Services</span>
            </a>
            <span classname="tooltip"> Services</span>
          </li>
          <li>
            <a href="#">
              <i classname="bx bx-chat" />
              <span classname="links_name">Upload</span>
            </a>
            <span classname="tooltip">Upload</span>
          </li>
          <li>
            <a href="C:\Users\admin\Desktop\project\client projects.html">
              <i classname="bx bx-pie-chart-alt-2" />
              <span classname="links_name">Broadcast system</span>
            </a>
            <span classname="tooltip">Broadcast system</span>
          </li>
          <li>
            <a href="C:\Users\admin\Desktop\project\AboutUs.html">
              <i classname="bx bx-folder" />
              <span classname="links_name">Download</span>
            </a>
            <span classname="tooltip">Download</span>
          </li>
          <li>
            <a href="C:/Users/admin/Desktop/project/registration.html">
              <i classname="bx bx-cart-alt" />
              <span classname="links_name">Share</span>
            </a>
            <span classname="tooltip">Share</span>
          </li>
          <li>
            <a href="#">
              <i classname="bx bx-cog" />
              <span classname="links_name">Setting</span>
            </a>
            <span classname="tooltip">Setting</span>
          </li>
          <li classname="profile">
            <div classname="profile-details">
              <div classname="name_job">
                <div classname="name">Poornima raghuwanshi</div>
                <div classname="job">Web designer</div>
              </div>
            </div>
            <i classname="bx bx-log-out" id="log_out" />
          </li>
        </ul>
      </div> */}
    {/* -----------main--------------- */}
  <div className="main">
    <h1>Video Message</h1>
          <div className="container">
  <div className="mySlides">
  <div class="numbertext">1 / 6</div>
        <video width="1100" height="300" ref={videoRef} >
        <source src="/Videos/3.webm" />
      </video>
      </div>
            
      <div className="comments-likes">
              <div className="comments-section">
          <h2>Comments</h2>
          <form id="comment-form">
            <input type="text" id="comment-input" placeholder="Write a comment..." />
            <button type="submit">Post Comment</button>
          </form>
        </div>
        <div className='play'>
        <button id="btn1" onClick={handlePlay}>
          Play
        </button>
        </div>
        <div className='pause'>
        <button id="btn_pause" onClick={handlePause}>
          Pause
        </button>
        </div>
        <div className="likes-section">
          <h2>Likes</h2>
          <button id="like-button">Like</button>
          <span id="like-count">0</span>
        </div>
          </div>
    </div>
{/* ----------------------------collapse----------------------------------------------------------------------- */}
    <div className="Swachh-pledge">
                  
       <CRow className="row1">
       <h4 className="panel-title">
                  <CButton href="#collapse1" onClick={() => setVisibleA(!visibleA)}>
                  <i className="bx bx-user" /> VIDEO INSTRUCTIONS </CButton>
              </h4>
      <CCol xs={6} className="Pledge-to-segregate">
      <CCollapse visible={visibleA}>
      <CCard className="mt-3">
        <CCardBody>
          <p>
          Check the video format:-- Ensure your video is in MP4 or MPEG3 format.
          <br />
          Optimal size:-- Video should be between 50-80KB in size.
          <br />
          Lighting:-- Ensure proper lighting for better video quality.
          <br />
          Background:-- Choose an appropriate background for your video.
          <br />
          Eye contact:-- Maintain eye contact with the camera.
          <br />
          Audio quality:-- Ensure high-quality audio for clear sound.
          <br />
          Dress appropriately:-- Dress according to the context of the video.
          <br />
          Participant interaction:-- Follow the ground rules for interactions.
          </p>
        </CCardBody>
      </CCard>
    </CCollapse>
    </CCol>
    </CRow>
    </div> 
    <div className="Pledge-to-segregate">
      <CButton href="#collapse2" onClick={() => setVisibleB(!visibleB)}>
        <h4 className="panel-title">
            <i className="bx bx-cart-alt" />
            <span className="links_name">DO'S AND DON'Ts</span>
                   </h4>
      </CButton>
        
      <CRow className="row2">
        <CCol xs={6} className="Pledge-to-segregate">
      <CCollapse visible={visibleB}>
      <CCard className="mt-3">
        <CCardBody>
        <p>
          {" "}
          1. Don’t forget to mute yourself if you are not speaking
          <br />
          2. Don't be late or appear unprepared
          <br />
          3. Don't wait until the last minute to test your technology
          <br />
          4.Don't Leave Technology Testing Till The Last Minute 5. Don't include
          more than two people in the video
        </p>
        </CCardBody>
      </CCard>
    </CCollapse>
    </CCol>
    </CRow> 
    </div>
          </div>
   
    <section>
      <nav>
        <div className="total1">
          8,096 <br />
          SCHOOLS
        </div>
        <div className="total2">
          2,917,646 <br />
          STUDENTS
        </div>
        <div className="total3">
          <i className="bx bx-user" />
          <br />
          <span className="links_name">
            have Already <br />
            UPLOADED THE VIDEO{" "}
          </span>
        </div>
      </nav>
    </section>
    <div classeName="products" id="products">
      <h1>swachh Abhiyan</h1>
      <div className="box">
        <div className="card">
          <div className="image">
            <img src={require('./images/download (1).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (2).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (3).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (4).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (5).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (6).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (7).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (8).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
      </div>
    </div>
</>

  );
}

export default App;

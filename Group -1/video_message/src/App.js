import React, { useState, useRef} from 'react';
import { CButton, CCard, CCardBody, CCollapse } from '@coreui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './sidebar/Navbar';

function App() {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  const handleLinkClick = (event) => {
    setVisible(!visible);
  };

  return (
    <>
  {/* <link rel="stylesheet" href="C:\Users\USER\OneDrive\Documents\college internship\waste free project\style2.css"/> */}
  <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  
 
  <Navbar />

  
  <div className="main">
    <h1>Video Message</h1>
          <div className="container">
  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
        <video width="1100" height="300" >
        <source src="/Videos/3.webm" />
      </video>
      </div>
      
      <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

      <div className="comments-likes">
              <div className="comments-section">
          <h2>Comments</h2>
          <form id="comment-form">
            <input
              type="text"
              id="comment-input"
              placeholder="Write a comment..."
            />
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
    <div className="Swachh-pledge">
      <div className="panel-heading">
        <h4 className="panel-title">
          <CButton href="#" onClick={handleLinkClick}>
            <i className="bx bx-user" />
            <span className="links_name"> VIDEO INSTRUCTIONS </span>
        
    </CButton>
    </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse">
      <CCollapse visible={visible}>
      <CCard className="mt-3">
        <CCardBody>
      <ol class="instruction-list">
          <li>Check the video format: Ensure your video is in MP4 or MPEG3 format.</li>
          <li>Optimal size: Video should be between 50-80KB in size.</li>
          <li>Lighting: Ensure proper lighting for better video quality.</li>
          <li>Background: Choose an appropriate background for your video.</li>
          <li>Eye contact: Maintain eye contact with the camera.</li>
          <li>Audio quality: Ensure high-quality audio for clear sound.</li>
          <li>Dress appropriately: Dress according to the context of the video.</li>
          <li>Participant interaction: Follow the ground rules for interactions.</li>
        </ol>
        </CCardBody>
      </CCard>
    </CCollapse>
      </div>
    </div>
    <div className="Pledge-to-segregate">
      <div className="panel-heading">
      <CButton href="#" onClick={handleLinkClick}>
        <h4 className="panel-title">
          <a data-toggle="collapse" href="#collapse2">
            <i className="bx bx-cart-alt" />
            <span className="links_name">DO'S AND DON'Ts</span>
          </a>
          </h4>
      </CButton>
        
      </div>
      <div id="collapse2" className="panel-collapse collapse">
      <CCollapse visible={visible}>
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

    <div className="products" id="products">
      <h1>swachh Abhiyan</h1>
      <div className="box">
        <div className="card">
          <div className="image">
            <img src={require('./images/download (1).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Swachh Bharat urban toilet plan is 76 percent behind schedule.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (2).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Swachh Bharat: A public health crisis is upon us; here is how to avert it</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (3).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>DM hits streets to check trash disposal.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (4).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>West Bengal government starts special cleanliness drive.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (5).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>Consolidated day-wise report on Swachhata Hi Seva 2018 pertaining to ICAR.</p>
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
            <p>A civic tech approach to Swachh Bharat</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={require('./images/download (8).jpg')} alt="example" />
          </div>
          <div className="products_text">
            <p>                Govt issues report on Swachh Bharat Mission Urban</p>
            <h3>location:</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}

export default App;

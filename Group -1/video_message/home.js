import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  <link
    rel="stylesheet"
    href="C:\Users\USER\OneDrive\Documents\college internship\waste free project\style2.css"
  />
  <link
    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <div className="sidebar">
    <div className="logo-details">
      <i className="bx bxl-c-plus-plus icon" />
      <div className="logo_name">Video message</div>
      <i className="bx bx-menu" id="btn" />
    </div>
    <ul className="nav-list">
      <li>
        <i className="bx bx-search" />
        <input type="text" placeholder="Search..." />
        <span className="tooltip">Search</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-grid-alt" />
          <span className="links_name">Dashboard</span>
        </a>
        <span className="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="C:/Users/admin/Desktop/minor project.html">
          <i className="bx bx-user" />
          <span className="links_name">Services</span>
        </a>
        <span className="tooltip"> Services</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-chat" />
          <span className="links_name">Upload</span>
        </a>
        <span className="tooltip">Upload</span>
      </li>
      <li>
        <a href="C:\Users\admin\Desktop\project\client projects.html">
          <i className="bx bx-pie-chart-alt-2" />
          <span className="links_name">Broadcast system</span>
        </a>
        <span className="tooltip">Broadcast system</span>
      </li>
      <li>
        <a href="C:\Users\admin\Desktop\project\AboutUs.html">
          <i className="bx bx-folder" />
          <span className="links_name">Download</span>
        </a>
        <span className="tooltip">Download</span>
      </li>
      <li>
        <a href="C:/Users/admin/Desktop/project/registration.html">
          <i className="bx bx-cart-alt" />
          <span className="links_name">Share</span>
        </a>
        <span className="tooltip">Share</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className="links_name">Setting</span>
        </a>
        <span className="tooltip">Setting</span>
      </li>
      <li className="profile">
        <div className="profile-details">
          <div className="name_job">
            <div className="name">Poornima raghuwanshi</div>
            <div className="job">Web designer</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out" />
      </li>
    </ul>
  </div>
  <div className="main">
    <h1>Video Message</h1>
    <div className="container">
      <div className="mySlides">
        <div className="numbertext">1 / 6</div>
        <video width={1100} height={500} controls="">
          <source src="videos\8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mySlides">
        <div className="numbertext">2 / 6</div>
        <video width={1100} height={500} controls="">
          <source src="videos\2.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mySlides">
        <div className="numbertext">3 / 6</div>
        <video width={1100} height={500} controls="">
          <source src="videos\3.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mySlides">
        <div className="numbertext">4 / 6</div>
        <video width={1100} height={500} controls="">
          <source src="videos\4.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mySlides">
        <div className="numbertext">5 / 6</div>
        <video width={1100} height={500} controls="">
          <source src="videos\5.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mySlides">
        <div className="numbertext">6 / 6</div>
        <video width={1100} height={500} controls="">
          <source src="videos\6.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <a className="prev" onclick="plusSlides(-1)">
        ❮
      </a>
      <a className="next" onclick="plusSlides(1)">
        ❯
      </a>
      <br />
      <div className="comments-likes">
        <div className="comments-section">
          <h2>Comments</h2>
          <ul id="comments-list"></ul>
          <form id="comment-form">
            <input
              type="text"
              id="comment-input"
              placeholder="Write a comment..."
            />
            <button type="submit">Post Comment</button>
          </form>
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
          <a data-toggle="collapse" href="#collapse1">
            <i className="bx bx-user" />
            <span className="links_name"> VIDEO INSTRUCTIONS </span>
          </a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse">
        <p>
          {" "}
          1. Before uploading the video please check the type of your video mp4
          , mpeg3 .<br />
          2. video should be between 50-80kb
          <br />
          3. Ensure proper lighting
          <br />
          4. Choose the right background
          <br />
          5. Maintain eye contact
          <br />
          6. Ensure high quality audio
          <br />
          7. Dress appropriately
          <br />
          8. Follow the ground rules for participant interaction
          <br />
        </p>
      </div>
    </div>
    <div className="Pledge-to-segregate">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" href="#collapse2">
            <i className="bx bx-cart-alt" />
            <span className="links_name">DO'S AND DON'Ts</span>
          </a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse">
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
            <img src="images\download (1).jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="images\download (3).jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="images\download (2).jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="images\download (4).jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="images\download (5).jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="images\download (6).jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="images\download (7).jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h3>location:</h3>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="images\download.jpg" />
          </div>
          <div className="products_text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
  

import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    menuBtnChange();
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      document.getElementById('btn').classList.replace('bx-menu', 'bx-menu-alt-right');
    } else {
      document.getElementById('btn').classList.replace('bx-menu-alt-right', 'bx-menu');
    }
  };
  // const Navbar = ({ history }) => {
    const navigateToUpload = () => {
      navigateToUpload.push('./src/sidebar/Navbar.js');
    };
  // };
  return (
    
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus icon"></i>
        <div className="logo_name">Swach Haryana</div>
        <i className={`bx ${isSidebarOpen ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={toggleSidebar}>
       </i>
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="C:\Users\admin\Desktop\project\registration.html">
            <i className='bx bx-grid-alt'></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="C:/Users/admin/Desktop/project/major project.html">
            <i className='bx bx-user'></i>
            <span className="links_name">services</span>
          </a>
          <span className="tooltip">services</span>
        </li>
        <li>
          {/* <a href="C:\Users\USER\react\web1-2\src\sidebar\Navbar.js"> */}
           
          <button onClick={navigateToUpload}> 
          <i className='bx bx-chat'></i>
            <span className="links_name">Upload</span>
            </button>
          <span className="tooltip">Upload</span>
        </li>
        <li>
          <a href="C:\Users\admin\Desktop\project\AboutUs.html">
            <i className='bx bx-folder'></i>
            <span className="links_name">Download</span>
          </a>
          <span className="tooltip">Download</span>
        </li>
        <li>
          <a href="C:/Users/admin/Desktop/project/registration.html">
            <i className='bx bx-cart-alt'></i>
            <span className="links_name">Share</span>
          </a>
          <span className="tooltip">Share</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-cog'></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <div className="name_job">
              <div className="name"> Swachh Haryana</div>
              <div className="job">Swachh Bharat</div>
            </div>
          </div>
          <i className={`bx ${isSidebarOpen ? 'bx bx-log-out' : 'bx bx-log-out'}`} id="log_out" onClick={toggleSidebar}>
            </i>
        </li>
      </ul>
    </div>
    
  );
};

export default Sidebar;

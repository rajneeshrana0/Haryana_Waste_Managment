import React, { useState } from 'react';
import {FaBars,FaUsers,FaVideo,FaHandshake,FaBookReader,FaRecycle,FaScrewdriver,FaMoneyCheck,FaLocationArrow,FaLightbulb,FaCommentAlt,FaShoppingBag,FaThList} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/video",
            name:"Video Message",
            icon:<FaVideo/>
        },
        {
            path:"/join",
            name:"Join Us",
            icon:<FaUsers/>
        },
        {
            path:"/pledge",
            name:"Take a Pledge",
            icon:<FaHandshake/>
        },
        {
            path:"/about",
            name:"Learn About",
            icon:<FaBookReader/>
        },
        {
            path:"/audit",
            name:"Audit Your Waste",
            icon:<FaRecycle/>
        },
        {
            path:"/services",
            name:"Services For You",
            icon:<FaScrewdriver/>
        },
        {
            path:"/request",
            name:"Request / Complaint",
            icon:<FaMoneyCheck/>
        },
        {
            path:"/track",
            name:"Track Request",
            icon:<FaLocationArrow/>
        },
        {
            path:"/suggestion",
            name:"Suggestion",
            icon:<FaLightbulb/>
        },
        {
            path:"/faq",
            name:"FAQs",
            icon:<FaThList/>
        },
        {
            path:"/remarks",
            name:"Remarks",
            icon:<FaThList/>
        },
        {
            path:"/changelanguage",
            name:"Change Language",
            icon:<FaThList/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Waste Free Haryana</h1>
                   <div style={{marginLeft: isOpen ? "1rem" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                           
                       </NavLink>                     
                   ))
               }
           </div>
           {/* <main>{children}</main> */}
        </div>
    );
};

export default Sidebar;
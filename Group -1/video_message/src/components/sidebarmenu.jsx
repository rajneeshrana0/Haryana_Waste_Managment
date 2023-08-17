// /*side navigation*/
// body{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "Poppins" , sans-serif;
//   }
//   .sidebar{
//     position: fixed;
//     left: 0;
//     top: 0;
//     height: 100%;
//     width: 78px;
//     background: rgb(92 199 71);
//     padding: 6px 14px;
//     z-index: 99;
//     transition: all 0.5s ease;
//   }
//   .sidebar.open{
//     width: 250px;
//   }
//   .sidebar .logo-details{
//     height: 60px;
//     display: flex;
//     align-items: center;
//     position: relative;
//   }
//   .sidebar .logo-details .icon{
//     opacity: 0;
//     transition: all 0.5s ease;
//   }
//   .sidebar .logo-details .logo_name{
//     color: #fff;
//     font-size: 20px;
//     font-weight: 600;
//     opacity: 0;
//     transition: all 0.5s ease;
//   }
//   .sidebar.open .logo-details .icon,
//   .sidebar.open .logo-details .logo_name{
//     opacity: 1;
//   }
//   .sidebar .logo-details #btn{
//     position: absolute;
//     top: 50%;
//     right: 0;
//     transform: translateY(-50%);
//     font-size: 22px;
//     transition: all 0.4s ease;
//     font-size: 23px;
//     text-align: center;
//     cursor: pointer;
//     transition: all 0.5s ease;
//   }
//   .sidebar.open .logo-details #btn{
//     text-align: right;
//   }
//   .sidebar i{
//     color: #fff;
//     height: 60px;
//     min-width: 50px;
//     font-size: 28px;
//     text-align: center;
//     line-height: 60px;
//   }
//   .sidebar .nav-list{
//     margin-top: 20px;
//     height: 100%;
//     margin-right: 5px;
//     margin-left: -45px;
//   }
//   .sidebar li{
//     position: relative;
//     margin: 8px 0;
//     list-style: none;
//   }
//   .sidebar li .tooltip{
//     position: absolute;
//     top: -20px;
//     left: calc(100% + 15px);
//     z-index: 3;
//     background: #fff;
//     box-shadow: 0 5px 10px rgb(92 199 71);
//     padding: 6px 12px;
//     border-radius: 4px;
//     font-size: 15px;
//     font-weight: 400;
//     opacity: 0;
//     white-space: nowrap;
//     pointer-events: none;
//     transition: 0s;
//   }
//   .sidebar li:hover .tooltip{
//     opacity: 1;
//     pointer-events: auto;
//     transition: all 0.4s ease;
//     top: 50%;
//     transform: translateY(-50%);
//   }
//   .sidebar.open li .tooltip{
//     display: none;
//   }
//   .sidebar input{
//     font-size: 15px;
//     color: #FFF;
//     font-weight: 400;
//     outline: none;
//     height: 50px;
//     width: 100%;
//     width: 50px;
//     border: none;
//     border-radius: 12px;
//     transition: all 0.5s ease;
//     background: #444181;
//   }
//   .sidebar.open input{
//     padding: 0 20px 0 50px;
//     width: 100%;
//   }
//   .sidebar .bx-search{
//     position: absolute;
//     top: 50%;
//     left: 0;
//     transform: translateY(-50%);
//     font-size: 22px;
//     background: #444181;
//     color: #FFF;
//   }
//   .sidebar.open .bx-search:hover{
//     background: #444181;
//     color: #FFF;
//   }
//   .sidebar .bx-search:hover{
//     background: #FFF;
//     color: #444181;
//   }
//   .sidebar li a{
//     display: flex;
//     height: 100%;
//     width: 100%;
//     border-radius: 12px;
//     align-items: center;
//     text-decoration: none;
//     transition: all 0.4s ease;
//     background: #444181;
//   }
//   .sidebar li a:hover{
//     background: #FFF;
//   }
//   .sidebar li a .links_name{
//     color: #fff;
//     font-size: 15px;
//     font-weight: 400;
//     white-space: nowrap;
//     opacity: 0;
//     pointer-events: none;
//     transition: 0.4s;
//   }
//   .sidebar.open li a .links_name{
//     opacity: 1;
//     pointer-events: auto;
//   }
//   .sidebar li a:hover .links_name,
//   .sidebar li a:hover i{
//     transition: all 0.5s ease;
//     color: #444181;
//   }
//   .sidebar li i{
//     height: 50px;
//     line-height: 50px;
//     font-size: 18px;
//     border-radius: 12px;
//   }
//   .sidebar li.profile{
//     position: fixed;
//     height: 60px;
//     width: 78px;
//     left: 0;
//     bottom: -8px;
//     padding: 10px 14px;
//     background: #444181;
//     transition: all 0.5s ease;
//     overflow: hidden;
//   }
//   .sidebar.open li.profile{
//     width: 250px;
//   }
//   .sidebar li .profile-details{
//     display: flex;
//     align-items: center;
//     flex-wrap: nowrap;
//   }
//   .sidebar li img{
//     height: 45px;
//     width: 45px;
//     object-fit: cover;
//     border-radius: 6px;
//     margin-right: 10px;
//   }
//   .sidebar li.profile .name,
//   .sidebar li.profile .job{
//     font-size: 15px;
//     font-weight: 400;
//     color: #fff;
//     white-space: nowrap;
//   }
//   .sidebar li.profile .job{
//     font-size: 12px;
//   }
//   .sidebar .profile #log_out{
//     position: absolute;
//     top: 50%;
//     right: 0;
//     transform: translateY(-50%);
//     background: #444181;
//     width: 100%;
//     height: 60px;
//     line-height: 60px;
//     border-radius: 0px;
//     transition: all 0.5s ease;
//   }
//   .sidebar.open .profile #log_out{
//     width: 50px;
//     background: none;
//   }
  
//    .sidebar.open ~ .home-section{
//     left: 250px;
//     width: calc(100% - 250px);
//   }
//   .home-section .text{
//     display: inline-block;
//     color: #444181;
//     font-size: 25px;
//     font-weight: 500;
//     margin: 18px;
//     text-align: center;
//   }
//   #showcase {
//       min-height: 450px;
//   color: #fff;
//   text-align: center;
//   }
  
//   @media (max-width: 420px) {
//     .sidebar li .tooltip{
//       display: none;
//     }
//   }
//   /* -----------------------------start --------------------------------------------*/
//   .navbar {
//     background-color: #060b26;
//     height: 80px;
//     display: flex;
//     justify-content: start;
//     align-items: center;
//   }
  
//   .menu-bars {
//     margin-left: 2rem;
//     font-size: 2rem;
//     background: none;
//   }
  
//   .nav-menu {
//     background-color: #060b26;
//     width: 250px;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     position: fixed;
//     top: 0;
//     left: -100%;
//     transition: 850ms;
//   }
  
//   .nav-menu.active {
//     left: 0;
//     transition: 350ms;
//   }
  
//   .nav-text {
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     padding: 8px 0px 8px 16px;
//     list-style: none;
//     height: 60px;
//   }
  
//   .nav-text a {
//     text-decoration: none;
//     color: #f5f5f5;
//     font-size: 18px;
//     width: 95%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     padding: 0 16px;
//     border-radius: 4px;
//   }
  
//   .nav-text a:hover {
//     background-color: #1a83ff;
//   }
  
//   .nav-menu-items {
//     width: 100%;
//   }
  
//   .navbar-toggle {
//     background-color: #060b26;
//     width: 100%;
//     height: 80px;
//     display: flex;
//     justify-content: start;
//     align-items: center;
//   }
  
//   span {
//     margin-left: 16px;
//   }

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}
      </div>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <motion.div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink to={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <motion.div className="link_text">{subRoute.name}</motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
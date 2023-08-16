import React from 'react'
import "./AboutStyle.css"
import { Link } from 'react-router-dom'

const LearnAbout = () => {
  return (
    <div className='About'>
        <div className='header1'>
                <h1>Learn About</h1>
            </div>
            
            <div className='wayOfuse'>
                <ul>
                    <li><Link to="/HowToUse">How to use</Link></li>
                    <li><Link to="/TypesOfUser">User Type</Link></li>
                    <li><a href="#white-paper">White Paper</a></li>
                </ul>
            </div>
            
            <div id="how-to-use">
                <h2>How to Use ?</h2>
                <p></p>
            </div>
            
            <div id="user-type">
                <h2>User Type</h2>
                <p>Discover the different user types who benefit from our services.</p>
            </div>
            
            <div id="white-paper">
                <h2>White Paper</h2>
                <p>Read our comprehensive white paper to learn more about our technology and solutions.</p>
            </div>
    </div>
  )
}

export default LearnAbout
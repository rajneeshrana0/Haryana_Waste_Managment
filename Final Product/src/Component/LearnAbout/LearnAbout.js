import React from 'react'
import "./AboutStyle.css"
import { Link } from 'react-router-dom'

const LearnAbout = () => {
  return (
    <div className='About'>
        <div className='header1'>
                <h1>Learn About</h1>
            </div>
            
            <nav>
                <ul>
                    <li><Link to="/HowToUse">How to use</Link></li>
                    <li><a href="user1111.html">User Type</a></li>
                    <li><a href="#white-paper">White Paper</a></li>
                </ul>
            </nav>
            
            <section id="how-to-use">
                <h2>How to Use ?</h2>
                <p></p>
            </section>
            
            <section id="user-type">
                <h2>User Type</h2>
                <p>Discover the different user types who benefit from our services.</p>
            </section>
            
            <section id="white-paper">
                <h2>White Paper</h2>
                <p>Read our comprehensive white paper to learn more about our technology and solutions.</p>
            </section>
    </div>
  )
}

export default LearnAbout
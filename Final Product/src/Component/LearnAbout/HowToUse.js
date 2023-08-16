import React from "react";
import "./HowToUseStyle.css";

import img1 from '../../Assets/Images/video msg.jpg'
import img2 from '../../Assets/Images/joinus.png'
import img3 from '../../Assets/Images/img2.webp'
import img4 from '../../Assets/Images/audit.jpg'
import img5 from '../../Assets/Images/services.jpeg'
import img6 from '../../Assets/Images/complained.avif'

const HowToUse = () => {
  return (
    <div className="body">
      <div className="head1">
        <h1 className="section-heading">How to Use</h1>
      </div>
      <div className="section">
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="box">
                <img
                  src={img1}
                  width="300px"
                  height="300px"
                  alt="Video Message"
                />
              </div>
              <h3>Video Message</h3>
              <p>
                Watch an inspiring video that sheds light on the environmental
                challenges posed by waste and how the Waste Free Haryana Project
                aims to combat them. See our mission and goals in action!
              </p>
              <a href="" className="button">
                Read More
              </a>
            </div>
            <div className="card">
              <div className="box">
                <img
                  src={img2}
                  width="300px"
                  height="300px"
                  alt="Video Message"
                />
              </div>
              <h3>Join Us</h3>
              <p>
              Join us in our journey towards a cleaner and greener Haryana. Sign up now to become a member and actively participate in waste reduction activities, access exclusive resources, and stay updated with our latest initiatives
              </p>
              <a href="" className="button">
                Read More
              </a>
            </div>
            <div className="card">
              <div className="box">
                <img
                  src={img3}
                  width="300px"
                  height="300px"
                  alt="Video Message"
                />
              </div>
              <h3>Take a Pledge</h3>
              <p>
              Take the Waste Free Haryana pledge and become a champion for responsible waste management. By pledging, you commit to reducing waste generation, promoting recycling, and fostering environmental consciousness within your community.
              </p>
              <a href="" className="button">
                Read More
              </a>
            </div>
          </div>
          
          {/* Repeat the above structure for other sections */}
        </div>

        <div className="row">
          <div className="column">
            <div className="card">
              <div className="box">
                <img
                  src={img4}
                  width="300px"
                  height="300px"
                  alt="Video Message"
                />
              </div>
              <h3>Audit waste</h3>
              <p>
              Conduct a waste audit to understand your waste generation habits better. By assessing your waste profile, you can make informed decisions on responsible waste disposal and reduction strategies.
              </p>
              <a href="" className="button">
                Read More
              </a>
            </div>
            <div className="card">
              <div className="box">
                <img
                  src={img5}
                  width="300px"
                  height="300px"
                  alt="Video Message"
                />
              </div>
              <h3>Services for You</h3>
              <p>
              Access information about reliable waste disposal services available in your area. From e-waste recycling to hazardous waste management, we facilitate proper and eco-friendly waste disposal.
              </p>
              <a href="" className="button">
                Read More
              </a>
            </div>
            <div className="card">
              <div className="box">
                <img
                  src={img6}
                  width="300px"
                  height="300px"
                  alt="Video Message"
                />
              </div>
              <h3>Request\Complaint</h3>
              <p>
              If you encounter any waste-related issues in your area, use this section to report complaints and concerns. Your feedback is crucial in driving continuous improvement and finding sustainable solutions.
              </p>
              <a href="" className="button">
                Read More
              </a>
            </div>
          </div>
          
          {/* Repeat the above structure for other sections */}
        </div>
      </div>
    </div>
  );
};

export default HowToUse;

import React, { useState } from 'react';
import './WasteManagementServices.css'
import { Link } from 'react-router-dom';
import mixed from '../Assets/Images/mixed_solid_waste_image.jpeg'
import segt from '../Assets/Images/segregated_waste_image.jpeg'
import safe from '../Assets/Images/safe_disposal_waste_image.jpeg'

function WasteManagementServices() {
    const [listDisplay, setListDisplay] = useState({
        mixedList: false,
        segregatedList: false,
        disposalList: false
    });

    const toggleList = (listId) => {
        setListDisplay(prevState => ({
            ...prevState,
            [listId]: !prevState[listId]
        }));
    };

    return (
      <div>
        <header>
          <h1>Our Waste Management Services</h1>
        </header>
        <div className="container">
          <div className="service">
            <h2 onClick={() => toggleList("mixedList")}>Mixed Solid Waste</h2>
            <ul
              id="mixedList"
              style={{ display: listDisplay.mixedList ? "block" : "none" }}
            >
              <li>
                <Link to="#">Learn From Video</Link>
              </li>
              <li>
                <Link to="/WasteTypeForm">Composition Chart</Link>
              </li>
            </ul>
            <img src={mixed} />
          </div>
          <div className="service">
            <h2 onClick={() => toggleList("segregatedList")}>
              Segregated Waste
            </h2>
            <ul
              id="segregatedList"
              style={{ display: listDisplay.segregatedList ? "block" : "none" }}
            >
              <li>
                <Link to="#">Learn From Video</Link>
              </li>
              <li>
                <Link to="#">Partially</Link>
              </li>
              <li>
                <Link to="/WasteTypeForm">Completely</Link>
              </li>
            </ul>
            <img src={segt} />
          </div>
          <div className="service">
            <h2 onClick={() => toggleList("disposalList")}>
              Safe Disposal Waste
            </h2>
            <ul
              id="disposalList"
              style={{ display: listDisplay.disposalList ? "block" : "none" }}
            >
              <li>
                <Link to="#">Learn From Video</Link>
              </li>
              <li>
                <Link to="#">Go to White Page</Link>
              </li>
            </ul>
            <img src={safe} />
          </div>
        </div>
      </div>
    );
}

export default WasteManagementServices;

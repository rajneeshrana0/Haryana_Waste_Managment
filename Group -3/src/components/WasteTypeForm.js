import React, { useState, useRef } from 'react';
import './WasteTypeForm.css'; // Import your CSS file for styling
import { firestore } from "../Backend/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { Link } from 'react-router-dom'
const WasteTypeForm = () => {

  const [certificate, setCertificate] = useState(false);

  const messageRef = useRef();
  const IDRef = useRef();

  const ref = collection(firestore, "Audit-your-waste"); //used to create collection..

  const handleSave = async (e) => {
    e.preventDefault();
    // console.log(messageRef.current.value);
    let Data = {
      message: messageRef.current.value,
      id: IDRef.current.value,
    }

    try {
      addDoc(ref, Data);
    } catch (e) {
      console.log(e);
    }
  };





  const wasteTypes = ["plastic", "paper", "glass", "metal", "organic", "Dust", "Leather", "Coconut Shell", "Dry Leaves", "Rubber"];
  const [inputValues, setInputValues] = useState({});
  const [summaryText, setSummaryText] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [type, field] = name.split('_');
    setInputValues(prevValues => ({
      ...prevValues,
      [type]: {
        ...prevValues[type],
        [field]: value
      }
    }));
  };

  const handleCalculate = () => {
    let totalQuantityKg = 0;
    let totalCount = 0;
    let newSummaryText = "";

    newSummaryText += '<h2>Waste Type Details:</h2>';

    wasteTypes.forEach(type => {
      const quantityKg = parseFloat(inputValues[type]?.quantityKg) || 0;
      const count = parseInt(inputValues[type]?.count) || 0;

      totalQuantityKg += quantityKg * count;
      totalCount += count;

      newSummaryText += `
        <h3>${capitalize(type)}:</h3>
        <p>Quantity in kg: ${quantityKg.toFixed(2)}, Count: ${count}, Total Quantity: ${(quantityKg * count).toFixed(2)}</p>
      `;
    });

    newSummaryText += '<h2>Total Waste Summary:</h2>';
    newSummaryText += `
      <p>Total Quantity in kg: ${totalQuantityKg.toFixed(2)}</p>
      <p>Total Count: ${totalCount}</p>
    `;

    setSummaryText(newSummaryText);
    setCertificate(true);

  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  let certificateStyle = {
    display: "none",


  }
  if (certificate === true) {
    certificateStyle = {
      display: "block",
      height: "40px",
      width:"200px",
      fontSize: "1.1rem",
      color: "grey",
      fontWeight: "400",
      margin:" 10px auto",
      marginTop: "10px",
      boxShadow: "1px 1px 5px  grey",
      border: "none",
      textAlign :"center",
      cursor:"pointer"
    }

  }


  return (
    <div className="container">
      <h1 className="title">Waste Type Selection Form</h1>
      <form id="wasteForm" onSubmit={handleSave}>
        <div className="waste-types">
          {wasteTypes.map(type => (
            <label key={type} className="waste-type-label">
              <input
                type="checkbox"
                name={`wasteType_${type}`}
                value={type}
                className="waste-type-checkbox"
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setInputValues(prevValues => ({
                    ...prevValues,
                    [value]: {
                      ...prevValues[value],
                      isChecked: checked
                    }
                  }));
                }}
              />
              {capitalize(type)}
            </label>
          ))}
        </div>

        <div className="waste-quantities">
          {wasteTypes.map(type => (
            inputValues[type]?.isChecked && (
              <div key={type} className="waste-type-quantity">
                <label className="quantity-label">{capitalize(type)}:</label>
                <div>
                  <label className="input-label">
                    Quantity in kg:{' '}
                    <input
                      type="number"
                      name={`${type}_quantityKg`}
                      value={inputValues[type]?.quantityKg || ''}
                      onChange={handleInputChange}
                      ref={messageRef}
                      className="input-field"
                    />
                  </label>
                  <label className="input-label">
                    Count:{' '}
                    <input
                      type="number"
                      name={`${type}_count`}
                      value={inputValues[type]?.count || ''}
                      onChange={handleInputChange}
                      ref={IDRef}
                      className="input-field"
                    />
                  </label>
                </div>
              </div>
            )
          ))}
        </div>

        <button type="button" onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>

        <button type='submit' className="calculate-button">Save</button>
      </form>

      <div
        id="summary"
        className="summary"
        dangerouslySetInnerHTML={{ __html: summaryText }}
      />
      <Link style={certificateStyle} to="/certificate"> Generate Certificate</Link>

    </div>
  );
};

export default WasteTypeForm;

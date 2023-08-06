import React, { useState } from "react";
import "./WasteTypeForm.css"; // Import your CSS file for styling

const WasteTypeForm = () => {
  const wasteTypes = [
    "plastic",
    "paper",
    "glass",
    "metal",
    "organic",
    "Dust",
    "Leather",
    "Coconut Shell",
    "Dry Leaves",
    "Rubber",
  ];
  const [inputValues, setInputValues] = useState({});
  const [summaryText, setSummaryText] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [type, field] = name.split("_");
    setInputValues((prevValues) => ({
      ...prevValues,
      [type]: {
        ...prevValues[type],
        [field]: value,
      },
    }));
  };

  const handleCalculate = () => {
    let totalQuantityKg = 0;
    let totalCount = 0;
    let newSummaryText = "";

    newSummaryText += "<h2>Waste Type Details:</h2>";

    wasteTypes.forEach((type) => {
      const quantityKg = parseFloat(inputValues[type]?.quantityKg) || 0;
      const count = parseInt(inputValues[type]?.count) || 0;

      totalQuantityKg += quantityKg * count;
      totalCount += count;

      newSummaryText += `
        <h3>${capitalize(type)}:</h3>
        <p>Quantity in kg: ${quantityKg.toFixed(
          2
        )}, Count: ${count}, Total Quantity: ${(quantityKg * count).toFixed(
        2
      )}</p>
      `;
    });

    newSummaryText += "<h2>Total Waste Summary:</h2>";
    newSummaryText += `
      <p>Total Quantity in kg: ${totalQuantityKg.toFixed(2)}</p>
      <p>Total Count: ${totalCount}</p>
    `;

    setSummaryText(newSummaryText);
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container">
      <h1 className="title">Waste Type Selection Form</h1>
      <form id="wasteForm">
        <div className="waste-types">
          {wasteTypes.map((type) => (
            <label key={type} className="waste-type-label">
              <input
                type="checkbox"
                name={`wasteType_${type}`}
                value={type}
                className="waste-type-checkbox"
                onChange={(e) => {
                  const { checked, value } = e.target;
                  setInputValues((prevValues) => ({
                    ...prevValues,
                    [value]: {
                      ...prevValues[value],
                      isChecked: checked,
                    },
                  }));
                }}
              />
              {capitalize(type)}
            </label>
          ))}
        </div>

        <div className="waste-quantities">
          {wasteTypes.map(
            (type) =>
              inputValues[type]?.isChecked && (
                <div key={type} className="waste-type-quantity">
                  <label className="quantity-label">{capitalize(type)}:</label>
                  <div>
                    <label className="input-label">
                      Quantity in kg:{" "}
                      <input
                        type="number"
                        name={`${type}_quantityKg`}
                        value={inputValues[type]?.quantityKg || ""}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </label>
                    <label className="input-label">
                      Count:{" "}
                      <input
                        type="number"
                        name={`${type}_count`}
                        value={inputValues[type]?.count || ""}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </label>
                  </div>
                </div>
              )
          )}
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="calculate-button"
        >
          Calculate
        </button>
      </form>

      <div
        id="summary"
        className="summary"
        dangerouslySetInnerHTML={{ __html: summaryText }}
      />
    </div>
  );
};

export default WasteTypeForm;

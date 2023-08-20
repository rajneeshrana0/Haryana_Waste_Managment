import React, { useState } from "react";

const GenerateSequenceNumber = () => {
  const [sequenceNumber, setSequenceNumber] = useState("");

  const generateSequenceNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9999) + 1000;
    const sequenceNumberArray = [randomNumber];
    for (let i = 1; i < 4; i++) {
      sequenceNumberArray.push(sequenceNumberArray[i - 1] + 1);
    }
    setSequenceNumber(sequenceNumberArray.join("-"));
  };

  return (
    <div>
      <h1>Generate Sequence Number</h1>
      <p>The sequence number is: {sequenceNumber}</p>
      <button onClick={generateSequenceNumber}>Generate Sequence Number</button>
    </div>
  );
};

export default GenerateSequenceNumber;
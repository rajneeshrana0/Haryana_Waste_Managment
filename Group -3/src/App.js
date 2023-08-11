import React from "react";
import { Routes, Route } from "react-router-dom";
import WasteManagementServices from "./components/WasteManagementServices";
import WasteTypeForm from "./components/WasteTypeForm";
import SegatWaste from './components/segatWaste';
import Certificate from './components/certificate';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WasteManagementServices />} />
      <Route path="/WasteTypeForm" element={<WasteTypeForm />} />
      <Route path="/segatWaste" element={<SegatWaste />} />
      <Route path="/certificate" element={<Certificate/>} />
    </Routes>
  );
};

export default App;

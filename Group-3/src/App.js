import React from "react";
import { Routes, Route } from "react-router-dom";
import WasteManagementServices from "./components/WasteManagementServices";
import WasteTypeForm from "./components/WasteTypeForm";
import segatWaste from './components/segatWaste';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WasteManagementServices />} />
      <Route path="/WasteTypeForm" element={<WasteTypeForm />} />
      <Route path="/segatWaste" element={<segatWaste />} />
    </Routes>
  );
};

export default App;

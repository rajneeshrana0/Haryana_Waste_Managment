import React from "react";
import "./Home.css";
import { Route, Routes } from "react-router-dom";
import WasteManagementServices from "./WasteManagementServices";
import WasteTypeForm from "./WasteTypeForm";
import LearnAbout from "./LearnAbout/LearnAbout";
import HowToUse from "./LearnAbout/HowToUse";
import TypesOfUser from "./LearnAbout/TypesOfUser";
import Home1 from "./PledgeComponents/Home/Home.jsx";
import Form from "./PledgeComponents/Form/Form.jsx";
import Cert from "./PledgeComponents/Certificate/Cert.jsx";
import Read from "./PledgeComponents/Read/Read.jsx";
import ServicesForYou from "./ServicesForYou/ServicesForYou";
import MainPage from "./MainPage";
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  return (
    <div className="Home">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/TypesOfUser" element={<TypesOfUser />} />
        <Route path="/LearnAbout" element={<LearnAbout />} />
        <Route
          path="/WasteManagementServices"
          element={<WasteManagementServices />}
        />
        <Route path="/WasteTypeForm" element={<WasteTypeForm />} />
        <Route path="/HowToUse" element={<HowToUse />} />

        <Route path="/pledge" element={<Read />} />
        <Route path="/Home" element={<Home1 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/certi" element={<Cert />} />

        <Route path="/ServicesForYou" element={<ServicesForYou />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Home;

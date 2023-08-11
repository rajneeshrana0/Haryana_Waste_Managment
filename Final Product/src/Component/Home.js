import React from "react";
import "./Home.css";
import { Route, Router, Routes } from "react-router-dom";
import WasteManagementServices from "./WasteManagementServices";
import WasteTypeForm from "./WasteTypeForm";
import LearnAbout from "./LearnAbout/LearnAbout";
import HowToUse from "./LearnAbout/HowToUse";
// import About from './pages/About.jsx';
// import Video from './pages/Video.jsx';
// import Join from './pages/Join.jsx';
// import Pledge from './pages/Pledge.jsx';
// import Services from './pages/Services.jsx';
// import Request from './pages/Request.jsx';
// import Track from './pages/Track.jsx';
// import Suggestion from './pages/Suggestion.jsx';
// import FAQ from './pages/FAQ.jsx';
// import Remark from './pages/Remark.jsx';
// import Changelanguage from './pages/ChangeLanguage.jsx';
// import Logout from './pages/Logout.jsx';

const Home = () => {
  return (
    <div className="Home">
      <Routes>
        {/* <Route path="/pledge"/>
          <Route path="/video" element={<Video />} />
          <Route path="/join" element={<Join />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/about" element={<About />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request" element={<Request />} />
          <Route path="/track" element={<Track />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/remarks" element={<Remark />} />
          <Route path="/changelanguage" element={<Changelanguage />} />
          <Route path="/logout" element={<Logout />} /> */}

          <Route path="/LearnAbout" element={<LearnAbout/>}/>
        <Route
          path="/WasteManagementServices"
          element={<WasteManagementServices />}
        />
        <Route path="/WasteTypeForm" element={<WasteTypeForm />} />
        <Route path="/HowToUse" element={<HowToUse/>}/>
      </Routes>
    </div>
  );
};

export default Home;

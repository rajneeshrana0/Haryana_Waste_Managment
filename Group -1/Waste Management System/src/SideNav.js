import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './pages/About.jsx';
import Video from './pages/Video.jsx';
import Join from './pages/Join.jsx';
import Pledge from './pages/Pledge.jsx';
import Audit from './pages/Audit.jsx';
import Services from './pages/Services.jsx';
import Request from './pages/Request.jsx';
import Track from './pages/Track.jsx';
import Suggestion from './pages/Suggestion.jsx';
import FAQ from './pages/FAQ.jsx';
import Remark from './pages/Remark.jsx';
import Changelanguage from './pages/ChangeLanguage.jsx';
import Logout from './pages/Logout.jsx';


const SideNav = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/"/>
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
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default SideNav;
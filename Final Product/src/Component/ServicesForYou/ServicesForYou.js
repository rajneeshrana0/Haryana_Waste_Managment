
import "./Service.css";
import React, { useState } from "react";


const ServicesForYou = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
    const [pdfUrl, setPdfUrl] = useState("example.pdf"); // Replace with the URL of your PDF
  
    const showModal = (url) => {
      setVideoUrl(url);
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
      setVideoUrl("");
    };
  
    const loadPDF = (url) => {
      setPdfUrl(url);
    };
  
  return (
    <div>
      <header>
        <h1>My Services Page</h1>
      </header>

      <div className="container1">
        <div className="services1">
          <h2>Available Services</h2>
          <ul>
            <ServiceLink
              onClick={() => showModal("video1.mp4")}
              text="Service 1"
            />
            <ServiceLink
              onClick={() => showModal("video2.mp4")}
              text="Service 2"
            />
            
          </ul>
        </div>
        <div className="pdf-viewer">
          <h2>PDF Viewer</h2>
          <div className="pdf-container">
            <iframe
              src={pdfUrl}
              className="pdf-iframe"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      </div>
      {modalVisible && (
        <Modal>
          <video className="video-player" controls src={videoUrl}></video>
          <button className="close-btn" onClick={closeModal}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};
const ServiceLink = ({ onClick, text }) => (
    <li>
      <a href="#" onClick={onClick}>
        {text} 
      </a>
    </li>
  );
  
  const Modal = ({ children }) => (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  
  );


export default ServicesForYou
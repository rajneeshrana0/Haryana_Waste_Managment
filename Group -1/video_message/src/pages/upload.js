import React, { useState } from 'react';

const VideoUploadPage = () => {

  return (
    <div>
      <Navbar />
      <div className="upload">
        <h1>Video Upload</h1>
        <div className="uploadForm">
          <form id="uploadForm">
            <label htmlFor="uploader">Uploader Name:</label>
            <input type="text" id="uploader" name="uploader" required /><br /><br />
            <label htmlFor="video">Select a video to upload:</label><br /><br />
            <div className="dropbox">
              <input type="file" id="video" name="video" accept="video/*" required />
            </div><br />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadPage;

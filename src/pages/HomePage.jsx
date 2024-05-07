import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { GrInstagram } from "react-icons/gr";
import '../css/HomePage.css';
import "./ContactPage"
import '../components/PhotoUpload';
import './UploadingTab'
import { toast } from 'react-toastify';
import { toastErrorStyle } from '../components/uitls/toastStyle';
import VideoUpload from '../components/VideoUpload';
import DeleteVideos from '../components/DeleteVideos';
import DeletePhotos from '../components/DeletePhotos';
import PhotoContainer from '../components/PhotoContainer';

function HomePage() {

  const [showHoverText, setShowHoverText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHoverText(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`Maindiv`}>
      <header>
        <div className="heading-container">
          <h1 className="sofia-regular">sushanth sherigar</h1>
        </div>

        <div className='header-links'>
          <Link to='/UploadingTab' className="teko-heading">UPLOAD</Link>
          <Link to='/ContactPage' className="teko-headings">CONTACT</Link>
          <Link to='https://www.instagram.com/abhi.devadi?igsh=MW1pdGcxcjhpZzRiNA==' className="teko-heading1">
            <GrInstagram style={{ color: '#3F2305', width: '26px', height: '25px' }} />
          </Link>
        </div>
      </header>

      <p className={`hoverText ${showHoverText ? 'show' : ''}`}>
        <h4 style={{ textAlign: 'center' }}>WE CAPTURE THE MOMENTS</h4>
        <ul style={{ listStyleType: 'none', padding: '' }}>
          <li>Trust us to capture the magic of your life's journey, one frame at a time, freezing fleeting
            moments into extraordinary memories with our passion and keen eye for detail.</li>

        </ul>
      </p>

      {/* <VideoUpload /> */}
      {/* <DeleteVideos /> */}
      {/* <DeletePhotos /> */}

      {/* <PhotoContainer /> */}

    </div>
  );
}

export default HomePage;
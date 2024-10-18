import React from 'react';
import { Suspense, lazy } from 'react';
import './Banner.css';

const PdfNotes = lazy(()=> import('./pdfNotes'))
const VideoLectures = lazy(()=> import('./VideoLectures'))
const Blogs = lazy(()=> import('./Blogs'))
const CommunitySupport = lazy(()=> import('./CommunitySupport'))


const Banner = () => {
  return (
    <div className="banner-section">
      {/* Left Section */}
      <div className="banner-content">
        <h1 className="banner-heading">Unlock Your Web Development Potential</h1>
        <h2 className="banner-subheading">Access High-Quality Resources for Free</h2>

        <div className="banner-features">
        <Suspense fallback={<div>Loading...</div>}>
        <PdfNotes/>
        <VideoLectures/>
        <Blogs/>
        <CommunitySupport/>

        </Suspense>
        
        
        </div>

       
      </div>
    </div>
  );
};

export default Banner;

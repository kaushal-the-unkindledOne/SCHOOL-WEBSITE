import React from 'react';
import sportsDay from '../image/sports_day.jpg';
import scienceExhibition from '../image/science_exhibition.jpg';
import culturalFest from '../image/cultural_fest.jpg';
import classroom from '../image/classroom.jpg';
import library from '../image/library.jpg';
import schoolTour from '../video/school_tour.mp4';
import annualFunction from '../video/annual_function.mp4';
import '../Styles/Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="heading">Gallery</h2>
      <div className="video-section">
        <video src={schoolTour} controls className="gallery-video">A virtual tour of Springdale Public School.</video>
        <video src={annualFunction} controls className="gallery-video">Highlights from the Annual Function 2023.</video>
      </div>
      <div className="image-section">
        <div className="gallery-image-container">
          <img src={sportsDay} alt="Students participating in various sports events." className="gallery-image"/>
        </div>
        <div className="gallery-image-container">
          <img src={scienceExhibition} alt="Students presenting their science projects." className="gallery-image"/>
        </div>
        <div className="gallery-image-container">
          <img src={culturalFest} alt="Students performing in the cultural fest." className="gallery-image"/>
        </div>
        <div className="gallery-image-container">
          <img src={classroom} alt="A glimpse of our interactive classrooms." className="gallery-image"/>
        </div>
        <div className="gallery-image-container">
          <img src={library} alt="Students reading and studying in the school library." className="gallery-image"/>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

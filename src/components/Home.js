import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <h1 className='heading'>Welcome to Springdale Public School</h1>
      <p>Where we nurture young minds for a brighter future.</p>
      <div className="carousel">
        <div>Annual Sports Day - Celebrating Excellence in Sports</div>
        <div>Science Exhibition - Showcasing Student Innovations</div>
        <div>Cultural Fest - Embracing Diversity and Creativity</div>
      </div>
    </section>
  );
}

export default Home;


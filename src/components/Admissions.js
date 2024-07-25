import React from 'react';
import '../Styles/Admissions.css';

const Admissions = () => {
  return (
    <section className="admissions">
      <h2 className="heading">Admission</h2>
      <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h3>Important Dates</h3>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </section>
  );
}

export default Admissions;

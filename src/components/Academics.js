import React from 'react';
import '../Styles/Academics.css';

const Academics = () => {
  return (
    <section className="academics">
      <h2 className="heading">Academics</h2>
      <h3>Curriculum</h3>
      <p>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</p>
      <p>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
      <p>Senior Secondary (Grades 11-12):</p>
      <ul>
        <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
        <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
      </ul>
      <h3>Teaching Methodologies</h3>
      <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      <h3>Educational Resources</h3>
      <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
    </section>
  );
}

export default Academics;

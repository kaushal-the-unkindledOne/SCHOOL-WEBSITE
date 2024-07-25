import React from 'react';
import '../Styles/ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2 className="heading">Contact-Us</h2>
      <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.152378698382!2d-94.1375645!3d36.1871758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96b4c3ece8d07%3A0x19b4cd3d32178b07!2sSpringdale%20Public%20Schools!5e0!3m2!1sen!2sin!4v1721796688511!5m2!1sen!2sin"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </section>
  );
}

export default ContactUs;

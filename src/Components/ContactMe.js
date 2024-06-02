import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section id="contact-me">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>Name: Your Name</p>
          <p>Phone: Your Phone Number</p>
          <p>Email: Your Email</p>
          <p>Website: Your Website</p>
          <p>Social Links: Your Social Links</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
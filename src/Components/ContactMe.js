import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section id="contact-me">
      <h2 className='heading'>Contact Me</h2>
      <div className="contact-content">
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject"></input>
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>Name: Satish Pandit Rathod</p>
          <p>Phone: +91 9511717372</p>
          <p>Email: Satish.rathod.ov@gmail.com</p>
          <p>Website: satrat.vercel.app</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
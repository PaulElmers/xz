import React from 'react';
import '../App.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

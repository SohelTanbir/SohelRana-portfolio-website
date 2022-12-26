import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div id="contact-section">
          <div className="container">
            <div class="section_title text-center">
                <h2>Contact Us</h2>
            </div>
            <div class="contact_box text-center">
                <div class="input_box">
                  <form>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/><br/>
                    <input type="text" placeholder="Subject"/><br/>
                    <textarea placeholder="Your Message"></textarea><br/>
                    <input type="submit" class="btn" value="Send Message"/>
                  </form>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Contact;
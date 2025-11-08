import React from 'react';
import './Contact.css'


const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Have a Project in Mind?</h2>
          <p className="section-lead">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="contact_box">
          <div className="input_box">
            <form>
              <div className="row">
                <div className="col-50">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="col-50">
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="row">
                <div className="col-100">
                  <input type="text" placeholder="Phone number" />
                </div>
              </div>

              <div className="row">
                <div className="col-100">
                  <textarea placeholder="Tell me about your project"></textarea>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <input type="submit" className="btn primary-btn" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
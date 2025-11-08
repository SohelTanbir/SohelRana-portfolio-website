import React from 'react';
import './Contact.css'


const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-lead">Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>
        </div>
        <div className="contact_box">
          <div className="input_box">
            <form>
              <div className="row">
                <div className="col-50">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-50">
                  <input type="email" placeholder="Email" />
                </div>
              </div>

              <div className="row">
                <div className="col-100">
                  <input type="text" placeholder="Phone (Optional)" />
                </div>
              </div>

              <div className="row">
                <div className="col-100">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', overflow: 'auto' }}>
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
import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div id="contact-section">
          <div className="container">
            <div className="section_title text-center">
                <h2>Contact Us</h2>
            </div>
            <div className="contact_box">
                <div className="input_box">
                  <form>
                    <div className="row">
                      <div className="col-50">
                        <input type="text" placeholder="Enter your name"/>
                      </div>
                      <div className="col-50">
                        <input type="text" placeholder="Company (Optional)"/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-50">
                        <input type="email" placeholder="Enter your email"/>
                      </div>
                      <div className="col-50">
                        <input type="text" placeholder="Phone number"/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-100">
                        <textarea placeholder="Tell me about your project"></textarea>
                      </div>
                    </div>

                    <div style={{textAlign: 'center', marginTop: '2.5rem'}}>
                      <input type="submit" className="btn primary-btn" value="Send Message"/>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Contact;
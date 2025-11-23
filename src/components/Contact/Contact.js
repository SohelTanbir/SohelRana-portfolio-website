import React, { useState } from 'react';
import './Contact.css'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { personalInfo } from '../../Data/Data';
import emailjs from '@emailjs/browser';
import {
  fadeInDirection,
  staggerContainer,
  staggerItem,
  scrollReveal,
} from '../../utils/animations';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    // Phone is optional, but validate if provided
    if (formData.phone.trim() && !/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill out all required fields correctly.'
      });
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          to_name: 'Sohel Rana',
        },
        publicKey
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later or email me directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeInDirection("up")}
          {...scrollReveal}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-lead">Looking to build something amazing? I design and develop custom web solutions that turn creative ideas into engaging digital realities.</p>
        </motion.div>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <motion.div
            className="contact-info-column"
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            whileInView="visible"
            {...scrollReveal}
          >
            <motion.div className="contact-info-card" variants={staggerItem}>
              <div className="contact-info-icon phone">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">{personalInfo.phone}</span>
              </div>
            </motion.div>

            <motion.div className="contact-info-card" variants={staggerItem}>
              <div className="contact-info-icon email">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">{personalInfo.email}</span>
              </div>
            </motion.div>

            <motion.div className="contact-info-card" variants={staggerItem}>
              <div className="contact-info-icon location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">{personalInfo.location}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="contact-form-column"
            initial="hidden"
            whileInView="visible"
            variants={fadeInDirection("right", 0.3)}
            {...scrollReveal}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-col-50">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    disabled={loading}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-col-50">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    disabled={loading}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-col-100">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    disabled={loading}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-col-100">
                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    disabled={loading}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`status-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="form-submit">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
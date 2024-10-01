import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com'; // Import Email.js library
import './ContactButton.css';

Modal.setAppElement('#root'); // Prevents screen readers from focusing outside the modal

const NewsletterSignup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // State to store success or error message

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setStatusMessage(""); // Clear the status message when modal closes
  };

  // Handle form submission using Email.js
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your Email.js service ID, template ID, and user ID
    const serviceID = 'service_ygcp0gr';
    const templateID = 'template_rkddpbq';
    const userID = 'TnzFvoC03IPVChl8N';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage("Successfully signed up for the newsletter! Please check your email for confirmation.");
        e.target.reset(); // Clear the form after successful submission
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatusMessage("There was a problem submitting your form. Please try again.");
      });
  };

  return (
    <div>
      <button className="newsletter-button" onClick={openModal}>
        Sign up for our Newsletter
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Join Our Newsletter</h2>
        <p>Stay updated with the latest news and upcoming music and merch!.</p>

        {/* Form submission using Email.js */}
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <button className="newsletter-button" type="submit">Sign Up</button>
        </form>

        {/* Display success or error message */}
        {statusMessage && <p>{statusMessage}</p>}

        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default NewsletterSignup;

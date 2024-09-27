import React, { useState } from 'react';
import Modal from 'react-modal';
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

  // Handle form submission using Formspree and the Fetch API
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Get form data

    fetch('https://formspree.io/f/mnnaeplz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setStatusMessage("Successfully signed up for the newsletter!");
        e.target.reset(); // Clear the form after successful submission
      } else {
        setStatusMessage("There was an error signing up for the newsletter. Please try again.");
      }
    })
    .catch(() => {
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

        {/* Form submission using Formspree with AJAX */}
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

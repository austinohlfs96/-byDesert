import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './ContactButton.css';

Modal.setAppElement('#root'); // Prevents screen readers from focusing outside the modal

const NewsletterSignup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Handle form submission using Email.js for newsletter signup
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your Email.js service ID
        'YOUR_TEMPLATE_ID', // Replace with your Email.js template ID
        e.target,
        'YOUR_USER_ID' // Replace with your Email.js user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Successfully signed up for the newsletter!');
          closeModal(); // Close the modal on success
        },
        (error) => {
          console.log(error.text);
          alert('There was an error signing up for the newsletter.');
        }
      );
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
        <form className="newsletter-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <button className="newsletter-button" type="submit">Sign Up</button>
        </form>
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default NewsletterSignup;

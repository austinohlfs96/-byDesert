import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './ContactButton.css';

Modal.setAppElement('#root'); // Prevents screen readers from focusing outside the modal

const ContactButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Handle form submission using Email.js
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
          alert('Email sent successfully!');
          closeModal(); // Close the modal on success
        },
        (error) => {
          console.log(error.text);
          alert('There was an error sending the email.');
        }
      );
  };

  return (
    <div>
      <button className="contact-button" onClick={openModal}>
        Contact Us
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Message</label>
          <textarea name="message" required />

          <button type="submit">Send</button>
        </form>
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ContactButton;

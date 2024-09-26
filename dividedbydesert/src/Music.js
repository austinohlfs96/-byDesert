import React, { useState } from 'react';
import Modal from 'react-modal';
import './Music.css';

Modal.setAppElement('#root'); // This prevents screen readers from focusing outside the modal

const Music = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="music-section">
      <h2>Our Music</h2>
      <div className="music-videos">
        <div className="video-container">
          <h3>The River</h3>
          <iframe
            src="https://www.youtube.com/embed/AQhCi8jP7gk"
            title="The River"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <h3>Rain</h3>
          <iframe
            src="https://www.youtube.com/embed/zO8m6UBLg-s"
            title="Rain"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Browse Merch Button */}
      <button className="newsletter-button" style={{ marginTop: '30px' }} onClick={openModal}>
        Browse Our Merch
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Merch Coming Soon!</h2>
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Music;

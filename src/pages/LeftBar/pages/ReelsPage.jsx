import React, { useState } from 'react';
import './ReelsPage.scss'; // External CSS file for styles

const ReelsPage = () => {
  const [modalContent, setModalContent] = useState({ type: '', src: '' });
  const [showModal, setShowModal] = useState(false);

  const openModal = (src) => {
    if (src.endsWith('.mp4')) {
      setModalContent({ type: 'video', src });
    } else {
      setModalContent({ type: 'image', src });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ type: '', src: '' });
  };

  return (
    <div className="reels-page">
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search with (ComstasHub)" />
      </div>

      <div className="grid">
        <img
          src="https://storage.googleapis.com/a1aa/image/HoXBdurXb96EPRiYvxU0tNCCP6anIvsqWNelLBUR1JobJfnTA.jpg"
          alt="Cartoon characters looking surprised"
          className="aspect-ratio-9-16"
          onClick={() => openModal('https://storage.googleapis.com/a1aa/image/HoXBdurXb96EPRiYvxU0tNCCP6anIvsqWNelLBUR1JobJfnTA.jpg')}
        />
        {/* Add more media like videos or images here */}
        <video
          className="aspect-ratio-9-16"
          controls
          onClick={() => openModal('https://storage.googleapis.com/a1aa/video/sample.mp4')}
        >
          <source src="https://storage.googleapis.com/a1aa/video/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="footer">
        <i className="fas fa-home"></i>
        <i className="fas fa-search"></i>
        <i className="fas fa-video"></i>
        <i className="fas fa-shopping-bag"></i>
        <i className="fas fa-user"></i>
      </div>

      {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          {modalContent.type === 'image' && (
            <img className="modal-content" src={modalContent.src} alt="Modal Content" />
          )}
          {modalContent.type === 'video' && (
            <video className="modal-content" controls>
              <source src={modalContent.src} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default ReelsPage;

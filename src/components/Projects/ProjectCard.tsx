import React, { useState } from 'react';
import './ProjectsCard.css';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  description,
  images
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <div className="project-image-container">
          <img 
            src={images[currentImageIndex]} 
            alt={`${title} - фото ${currentImageIndex + 1}`}
            className="project-image"
            loading="lazy"
          />
          {images.length > 1 && (
            <>
              <button 
                className="image-nav prev" 
                onClick={prevImage}
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button 
                className="image-nav next" 
                onClick={nextImage}
                aria-label="Следующее фото"
              >
                ›
              </button>
              <div className="image-counter">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
          <div className="project-category">{category}</div>
        </div>
        
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <button className="project-button" onClick={(e) => {
            e.stopPropagation();
            openModal();
          }}>
            Смотреть все фото
          </button>
        </div>
      </div>

      {/* Модальное окно для просмотра всех фото */}
      {isModalOpen && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-content">
              <h2 className="modal-title">{title}</h2>
              <p className="modal-category">{category}</p>
              <p className="modal-description">{description}</p>
              
              <div className="modal-gallery">
                {images.map((img, index) => (
                  <div key={index} className="modal-image-container">
                    <img 
                      src={img} 
                      alt={`${title} - фото ${index + 1}`}
                      className="modal-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
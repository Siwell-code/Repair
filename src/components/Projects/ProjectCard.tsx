import React, { useState, useEffect, useRef } from 'react';
import { useFullscreen } from '../../context/FullscreenContext';
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
  const scrollPosition = useRef(0);
  const targetSection = useRef<string>('');
  
  const { openFullscreen } = useFullscreen();

  useEffect(() => {
    if (isModalOpen) {
      scrollPosition.current = window.scrollY;
      
      const sections = ['projects', 'about', 'contacts'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          if (rect.top < viewportHeight && rect.bottom > 0) {
            targetSection.current = section;
            break;
          }
        }
      }

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition.current}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
      
      if (targetSection.current) {
        const element = document.getElementById(targetSection.current);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      } else {
        window.scrollTo(0, scrollPosition.current);
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isModalOpen]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsModalOpen(false);
  };

  const handleFullscreen = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openFullscreen(images, index, title);
  };

  return (
    <>
      <div className="project-card">
        <div 
          className="project-image-container"
          onClick={openModal}
        >
          <img 
            src={images[currentImageIndex]} 
            alt={`${title}`}
            className="project-image"
            loading="lazy"
            decoding="async"
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
          <button className="project-button" onClick={openModal}>
            Смотреть все фото
          </button>
        </div>
      </div>

      {/* Модальное окно с галереей */}
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
                  <div 
                    key={index} 
                    className="modal-image-container"
                    onClick={(e) => handleFullscreen(index, e)}
                  >
                    <img 
                      src={img} 
                      alt={`${title} - фото ${index + 1}`}
                      className="modal-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="image-overlay">
                      <span className="zoom-icon">🔍</span>
                    </div>
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
import React from 'react';
import { useFullscreen } from '../../context/FullscreenContext';
import './FullscreenViewer.css';

const FullscreenViewer: React.FC = () => {
  const {
    isFullscreenOpen,
    fullscreenImage,
    fullscreenImages,
    fullscreenIndex,
    fullscreenTitle,
    closeFullscreen,
    nextFullscreen,
    prevFullscreen
  } = useFullscreen();

  if (!isFullscreenOpen || !fullscreenImage) return null;

  return (
    <div className="fullscreen-overlay" onClick={closeFullscreen}>
      <button className="fullscreen-close" onClick={closeFullscreen}>×</button>
      
      {fullscreenImages.length > 1 && (
        <>
          <button 
            className="fullscreen-nav prev" 
            onClick={(e) => {
              e.stopPropagation();
              prevFullscreen();
            }}
          >
            ‹
          </button>
          <button 
            className="fullscreen-nav next" 
            onClick={(e) => {
              e.stopPropagation();
              nextFullscreen();
            }}
          >
            ›
          </button>
        </>
      )}
      
      <div className="fullscreen-counter">
        {fullscreenIndex + 1} / {fullscreenImages.length}
      </div>
      
      <img 
        src={fullscreenImage} 
        alt={`${fullscreenTitle} - полноэкранный режим`}
        className="fullscreen-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default FullscreenViewer;
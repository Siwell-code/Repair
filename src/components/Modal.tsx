import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import '../styles/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title = "Бесплатная консультация" }) => {
  // Блокируем скролл при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          ✕
        </button>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-subtitle">
            Заполните форму и наш специалист свяжется с вами в течение 15 минут
          </p>
        </div>
        <div className="modal-body">
          <ContactForm buttonText="Получить консультацию" />
        </div>
        <div className="modal-footer">
          <p className="modal-contact-info">
            Или позвоните нам прямо сейчас: 
            <a href="tel:+79991234567"> +7 (999) 123-45-67</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
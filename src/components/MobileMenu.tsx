import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PhoneIcon from './icons/PhoneIcon';
import LogoIcon from './icons/LogoIcon';
import '../styles/MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenModal }) => {
  const location = useLocation();
  
  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      return () => {
        document.body.classList.remove('menu-open');
      };
    }
  }, [isOpen]);

  // Функция для прокрутки к секциям на главной
  const handleNavigation = (sectionId?: string) => {
    if (sectionId && location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  const handleOpenModal = () => {
    onOpenModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="menu-overlay" onClick={onClose} />
      
      <div className="mobile-menu">
        <div className="mobile-menu-content">
          {/* Шапка меню */}
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <Link to="/" onClick={onClose}>
                <LogoIcon className="mobile" />
              </Link>
            </div>
            <button
              className="close-menu"
              onClick={onClose}
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>

          {/* Навигация */}
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <button
                  className="mobile-nav-link"
                  onClick={() => handleNavigation('projects')}
                >
                  Проекты
                </button>
              </li>
              <li className="mobile-nav-item">
                <button
                  className="mobile-nav-link"
                  onClick={() => handleNavigation('about')}
                >
                  О нас
                </button>
              </li>
              <li className="mobile-nav-item">
                <Link
                  to="/privacy-policy"
                  className="mobile-nav-link"
                  onClick={onClose}
                >
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </nav>

          {/* Контакты */}
          <div className="mobile-menu-contacts">
            <div className="mobile-menu-phone">
              <PhoneIcon size={24} color="#a87d5f" />
              <a href="tel:+79991234567" className="mobile-phone-number">
                +7 (999) 123-45-67
              </a>
            </div>

            <button className="mobile-menu-consultation" onClick={handleOpenModal}>
              Бесплатная консультация
            </button>

            <div className="mobile-menu-hours">
              <p>Пн-Пт: 9:00 - 19:00</p>
              <p>Сб: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
import React, { useEffect } from 'react';
import PhoneIcon from './icons/PhoneIcon';
import LogoIcon from './icons/LogoIcon';
import '../styles/MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenModal }) => {
  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      // Блокируем свайпы на меню когда оно закрыто
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.body.classList.remove('menu-open');
      };
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  const handleMenuClick = (e: React.MouseEvent) => {
    // Закрываем меню при клике на ссылку
    if ((e.target as HTMLElement).tagName === 'A') {
      onClose();
    }
  };

  const handleOpenModal = () => {
    onOpenModal();
    onClose();
  };

  // Если меню закрыто, не рендерим его вообще
  if (!isOpen) return null;

  return (
    <>
      {/* Оверлей (фон) */}
      <div className="menu-overlay" onClick={onClose} />
      
      {/* Само меню */}
      <div className="mobile-menu" onClick={handleMenuClick}>
        <div className="mobile-menu-content">
          {/* Шапка меню */}
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <div className="logo-icon-container">
                <LogoIcon className="logo-icon" />
              </div>
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
                <a
                  href="#projects"
                  className="mobile-nav-link"
                >
                  Проекты
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#about"
                  className="mobile-nav-link"
                >
                  О нас
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#contacts"
                  className="mobile-nav-link"
                >
                  Контакты
                </a>
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
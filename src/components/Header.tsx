import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PhoneIcon from './icons/PhoneIcon';
import LogoIcon from './icons/LogoIcon';
import '../styles/Header.css';

interface HeaderProps {
  onOpenModal: () => void;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal, onToggleMenu, isMenuOpen }) => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="hero-header">
      <div className="header-container">
        {/* Логотип слева */}
        <div className="logo">
          <Link to="/">
            <div className="logo-icon-container">
              <LogoIcon className="desktop" />
            </div>
          </Link>
        </div>

        {/* Навигация для десктопа */}
        <nav className="nav desktop-only">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Проекты
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('about')}
              >
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection('footer')}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        {/* Правая часть для десктопа */}
        <div className="header-right desktop-only">
          <div className="desktop-contacts-group">
            <div className="desktop-phone-container">
              <PhoneIcon size={24} color="#ffffff" />
              <a href="tel:+79991234567" className="desktop-phone-link">
                +7 (999) 123-45-67
              </a>
            </div>
            <button className="desktop-consultation-button" onClick={onOpenModal}>
              Бесплатная консультация
            </button>
          </div>
        </div>

        {/* Мобильный хедер */}
        <div className="mobile-header">
          <div className="mobile-contacts-group">
            <a href="tel:+79991234567" className="mobile-phone-button">
              <PhoneIcon size={22} color="#ffffff" />
            </a>
            <button className="mobile-consultation-button" onClick={onOpenModal}>
              Консультация
            </button>
          </div>

          <button
            className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={onToggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
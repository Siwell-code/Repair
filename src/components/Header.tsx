import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import LogoIcon from '../components/icons/LogoIcon'; 
import '../styles/Header.css';

interface HeaderProps {
  onOpenModal: () => void;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal, onToggleMenu, isMenuOpen }) => {
  return (
    <header className="hero-header">
      <div className="header-container">
        {/* Логотип слева - используем desktop класс */}
        <div className="logo">
          <div className="logo-icon-container">
            <LogoIcon className="desktop" /> {/* desktop класс для размера */}
          </div>
        </div>

        {/* Навигация для десктопа */}
        <nav className="nav desktop-only">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Проекты
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link">
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
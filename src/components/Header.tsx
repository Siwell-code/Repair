import React, { useState } from 'react';
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
  const [isPhoneTooltipVisible, setIsPhoneTooltipVisible] = useState(false);
  const [isMobilePhoneOpen, setIsMobilePhoneOpen] = useState(false);

  const scrollToSection = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const togglePhoneTooltip = () => {
    setIsPhoneTooltipVisible(!isPhoneTooltipVisible);
    // На мобильных устройствах показываем/скрываем номер
    if (window.innerWidth <= 768) {
      setIsMobilePhoneOpen(!isMobilePhoneOpen);
    }
  };

  const phoneNumber = "+7 (999) 123-45-67";

  return (
    <header className="hero-header">
      <div className="header-container">
        {/* Логотип слева */}
        <div className="logo">
          <Link to="/" aria-label="На главную">
            <div className="logo-icon-container">
              <LogoIcon className="desktop" />
            </div>
          </Link>
        </div>

        {/* Навигация для десктопа */}
        <nav className="nav desktop-only" aria-label="Основная навигация">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="#projects"
                className="nav-link"
                onClick={(e) => scrollToSection('projects', e)}
              >
                Проекты
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => scrollToSection('about', e)}
              >
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contacts"
                className="nav-link"
                onClick={(e) => scrollToSection('contacts', e)}
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
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="desktop-phone-link">
                {phoneNumber}
              </a>
            </div>
            <button 
              className="desktop-consultation-button" 
              onClick={onOpenModal}
              aria-label="Заказать бесплатную консультацию"
            >
              Бесплатная консультация
            </button>
          </div>
        </div>

        {/* Мобильный хедер */}
        <div className="mobile-header">
          <div className="mobile-contacts-group">
            {/* Контейнер с телефоном */}
            <div className="mobile-phone-wrapper">
              <button
                className={`mobile-phone-button ${isMobilePhoneOpen ? 'active' : ''}`}
                onClick={togglePhoneTooltip}
                onMouseEnter={() => setIsPhoneTooltipVisible(true)}
                onMouseLeave={() => setIsPhoneTooltipVisible(false)}
                aria-label="Показать номер телефона"
              >
                <PhoneIcon size={22} color="#ffffff" />
              </button>
              
              {/* Всплывающий номер телефона */}
              {(isPhoneTooltipVisible || isMobilePhoneOpen) && (
                <div className="mobile-phone-tooltip">
                  <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="mobile-phone-tooltip-link">
                    {phoneNumber}
                  </a>
                </div>
              )}
            </div>

            <button 
              className="mobile-consultation-button" 
              onClick={onOpenModal}
              aria-label="Заказать консультацию"
            >
              Консультация
            </button>
          </div>

          <button
            className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={onToggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
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
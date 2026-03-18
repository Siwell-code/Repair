import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import RutubeIcon from './icons/RutubeIcon';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';
import TelegramIcon from './icons/TelegramIcon';
import VKIcon from './icons/VkIcon';
import '../styles/Footer.css';

interface FooterProps {
  onOpenModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contacts">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-column">
            <div className="footer-logo" onClick={scrollToTop}>
              <h2 className="footer-brand">LILARD</h2>
              <div className="footer-brand-underline"></div>
            </div>
            <p className="footer-description">
              Профессиональный ремонт квартир и домов под ключ.
              Создаем пространство вашей мечты с 2019 года.
            </p>
            <div className="footer-social">
              <a
                href="https://t.me/lilard"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Telegram"
              >
                <TelegramIcon size={20} color="#fff" />
              </a>
              <a
                href="https://rutube.ru/channel/ваш_канал/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Rutube"
              >
                <RutubeIcon size={16} color="#fff" />
              </a>
              <a
                href="https://vk.com/lilard"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="VK"
              >
                <VKIcon size={20} color="#fff" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Навигация</h3>
            <ul className="footer-menu">
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="footer-link"
                >
                  Наши работы
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="footer-link"
                >
                  О компании
                </button>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Контакты</h3>
            <div className="footer-contact-item">
              <PhoneIcon size={18} color="#a87d5f" />
              <a href="tel:+79096556399" className="footer-contact-link">
                +7 (909) 655-63-99
              </a>
            </div>
            <div className="footer-contact-item">
              <EmailIcon size={18} color="#a87d5f" />
              <a href="mailto:info@lilard.company" className="footer-contact-link">
                info@lilard.company
              </a>
            </div>
            <div className="footer-contact-item">
              <LocationIcon size={18} color="#a87d5f" />
              <span className="footer-contact-text">
                г. Москва, ул. Горбунова, д. 2
              </span>
            </div>
            <div className="footer-contact-item">
              <ClockIcon size={18} color="#a87d5f" />
              <span className="footer-contact-text">
                Пн-Пт: 9:00 - 20:00<br />
                Сб-Вс: 10:00 - 18:00
              </span>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Быстрая связь</h3>
            <p className="footer-quick-text">
              Оставьте заявку и мы перезвоним вам в течение 15 минут
            </p>
            <button
              className="footer-button"
              onClick={onOpenModal}
            >
              Заказать звонок
            </button>
            <div className="footer-payment">
              <p>Принимаем к оплате:</p>
              <div className="payment-icons">
                <span className="payment-icon">Visa</span>
                <span className="payment-icon">MasterCard</span>
                <span className="payment-icon">МИР</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} LILARD. Все права защищены. Разработано Siwell-code.
          </div>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="footer-legal-link">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="footer-legal-link">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
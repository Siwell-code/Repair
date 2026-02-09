import React, { useState } from 'react';
import LogoIcon from '../components/icons/LogoIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import MailIcon from '../components/icons/PhoneIcon';
import LocationIcon from '../components/icons/PhoneIcon';
import ClockIcon from '../components/icons/PhoneIcon';
import VkIcon from '../components/icons/VkIcon';
import TelegramIcon from '../components/icons/TelegramIcon';
import RutubeIcon from '../components/icons/RutubeIcon';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email for subscription:', email);
    setEmail('');
    alert('Спасибо за подписку!');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Левая колонка - Логотип и слоган */}
        <div className="footer-column logo-column">
          <div className="footer-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <LogoIcon className="footer-logo-icon" />
          </div>
        </div>

        {/* Центральная колонка - Контакты */}
        <div className="footer-column contacts-column">
          <h3 className="footer-title">Контакты</h3>
          <div className="contact-info">
            <div className="contact-item">
              <LocationIcon className="contact-icon" />
              <span>Москва, ул. Горбунова, д.2, стр.3</span>
            </div>
            <div className="contact-item">
              <PhoneIcon className="contact-icon" />
              <a href="tel:+79991234567">+7 (999) 123-45-67</a>
            </div>
            <div className="contact-item">
              <MailIcon className="contact-icon" />
              <a href="mailto:info@lilard.ru">ooo.lilard@yandex.ru</a>
            </div>
            <div className="contact-item">
              <ClockIcon className="contact-icon" />
              <span>Пн-Вс: 9:00-18:00</span>
            </div>
          </div>
        </div>

        {/* Правая колонка - Соцсети и подписка */}
        <div className="footer-column social-column">
          <h3 className="footer-title">Мы в соцсетях</h3>
          <div className="social-links">
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="ВКонтакте"
            >
              <VkIcon className="social-icon" />
              <span>ВКонтакте</span>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Telegram"
            >
              <TelegramIcon className="social-icon" />
              <span>Telegram</span>
            </a>
            <a
              href="https://rutube.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Rutube"
            >
              <RutubeIcon className="social-icon" />
              <span>Rutube</span>
            </a>
          </div>

          <div className="subscription">
            <h3 className="footer-title">Подпишитесь на новости</h3>
            <form className="subscription-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="subscribe-button">
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Siwell-code. Все права защищены.</p>
          <p>
            <a href="#privacy">Политика конфиденциальности</a> |
            <a href="#terms"> Условия использования</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import PhoneIcon from '../components/icons/PhoneIcon';
import LogoIcon from '../components/icons/LogoIcon';
import Modal from '../components/Modal';
import '../styles/Home.css';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Квартира в центре",
      description: "Полный ремонт 3-комнатной квартиры",
      type: "Квартира",
      image: "/backgrounds/hero.webp"
    },
    {
      id: 2,
      title: "Загородный дом",
      description: "Ремонт двухэтажного коттеджа",
      type: "Дом",
      image: "/backgrounds/projects.webp"
    },
    {
      id: 3,
      title: "Офисное пространство",
      description: "Современный ремонт офиса",
      type: "Коммерческое",
      image: "/backgrounds/about.webp"
    },
    {
      id: 4,
      title: "Квартира-студия",
      description: "Евроремонт в современном стиле",
      type: "Квартира",
      image: "/backgrounds/hero.webp"
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Открытие модалки
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Закрытие модалки
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-page">
      {/* Контент Home */}
      <main className="home-content">
        {/* Hero секция */}
        <section
          className="hero"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/hero.webp)`
          }}
        >
          {/* Хедер ВНУТРИ героя */}
          <header className="hero-header">
            <div className="header-container">
              {/* Логотип слева */}
              <div className="logo">
                <div className="logo-icon-container">
                  <LogoIcon className="logo-icon" />
                </div>
              </div>

              {/* Навигация для десктопа */}
              <nav className="nav desktop-only">
                <ul className="nav-list">
                  <li className="nav-item">
                    <a href="#projects" className="nav-link" onClick={closeMenu}>
                      Проекты
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link" onClick={closeMenu}>
                      О нас
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#contacts" className="nav-link" onClick={closeMenu}>
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Правая часть для десктопа */}
              <div className="header-right desktop-only">
                <div className="desktop-contacts-group">
                  <div className="desktop-phone-container">
                    <PhoneIcon size={24} color="#ffffff" /> {/* Белый цвет иконки */}
                    <a href="tel:+79991234567" className="desktop-phone-link">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                  <button className="desktop-consultation-button" onClick={openModal}>
                    Бесплатная консультация
                  </button>
                </div>
              </div>

              {/* Мобильный хедер */}
              <div className="mobile-header">
                <div className="mobile-contacts-group">
                  <a href="tel:+79991234567" className="mobile-phone-button">
                    <PhoneIcon size={22} color="#ffffff" /> {/* Белый цвет иконки */}
                  </a>
                  <button className="mobile-consultation-button" onClick={openModal}>
                    Консультация
                  </button>
                </div>

                <button
                  className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                  onClick={toggleMenu}
                  aria-label="Открыть меню"
                >
                  <span className="burger-line"></span>
                  <span className="burger-line"></span>
                  <span className="burger-line"></span>
                </button>
              </div>
            </div>

            {/* Мобильное меню */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="mobile-menu-content">
                <div className="mobile-menu-header">
                  <div className="mobile-logo">
                    <div className="logo-icon-container">
                      <LogoIcon className="logo-icon" />
                    </div>
                  </div>
                  <button
                    className="close-menu"
                    onClick={closeMenu}
                    aria-label="Закрыть меню"
                  >
                    ✕
                  </button>
                </div>

                <nav className="mobile-nav">
                  <ul className="mobile-nav-list">
                    <li className="mobile-nav-item">
                      <a
                        href="#projects"
                        className="mobile-nav-link"
                        onClick={closeMenu}
                      >
                        Проекты
                      </a>
                    </li>
                    <li className="mobile-nav-item">
                      <a
                        href="#about"
                        className="mobile-nav-link"
                        onClick={closeMenu}
                      >
                        О нас
                      </a>
                    </li>
                    <li className="mobile-nav-item">
                      <a
                        href="#contacts"
                        className="mobile-nav-link"
                        onClick={closeMenu}
                      >
                        Контакты
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="mobile-menu-contacts">
                  <div className="mobile-menu-phone">
                    <PhoneIcon size={24} color="#a87d5f" />
                    <a href="tel:+79991234567" className="mobile-phone-number">
                      +7 (999) 123-45-67
                    </a>
                  </div>

                  <button className="mobile-menu-consultation" onClick={openModal}>
                    Бесплатная консультация
                  </button>

                  <div className="mobile-menu-hours">
                    <p>Пн-Пт: 9:00 - 19:00</p>
                    <p>Сб: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Оверлей для меню */}
            {isMenuOpen && (
              <div className="menu-overlay" onClick={closeMenu}></div>
            )}
          </header>

          {/* Контент героя */}
          <div className="hero-content">
            <h1 className="hero-title">Создаём пространство вашей мечты</h1>
            <p className="hero-subtitle">Дизайнерский ремонт квартир и домов под ключ</p>

            {/* Три прозрачных блока */}
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-text">проектов</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5</div>
                <div className="stat-text">лет опыта</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-text">поддержка</div>
              </div>
            </div>

            {/* Кнопка заявки */}
            <button className="cta-button" onClick={openModal}>
              Оставить заявку
            </button>
          </div>
        </section>

        {/* Projects секция */}
        <section
          id="projects"
          className="projects-section"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/projects.webp)`
          }}
        >
          <div className="section-overlay">
            <h2 className="section-title">Наши работы</h2>
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: `url(${project.image})`
                    }}
                  >
                    <div className="project-type">{project.type}</div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About секция */}
        <section
          id="about"
          className="about-section"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/about.webp)`
          }}
        >
          <div className="section-overlay">
            <h2 className="section-title1">О нашей компании</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  LILARD — это команда профессионалов, которые превращают ваши мечты о идеальном доме в реальность.
                </p>

                <div className="features">
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <div className='lift'>
                      <p className='prev-text'>Гарантия качества</p>
                      <span className='any-text'>5 лет гарантии на все работы. Используем только проверенные материалы.</span>
                    </div>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <div className='lift'>
                      <p className='prev-text'>Персональный прораб</p>
                      <span className='any-text'>За каждым проектом закреплен личный прораб, который контролирует все этапы.</span>
                    </div>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <div className='lift'>
                      <p className='prev-text'>Соблюдение сроков</p>
                      <span className='any-text'>Фиксируем сроки в договоре. За каждый день просрочки - 0.01% от стоимости.</span>
                    </div>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <div className='lift'>
                      <p className='prev-text'>Дизайн и ремонт</p>
                      <span className='any-text'>Создаем дизайн-проект и реализуем его под ключ. Единая ответственность.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
            <button className="cta-button" onClick={openModal}>
              Оставить заявку
            </button>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTopButton />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
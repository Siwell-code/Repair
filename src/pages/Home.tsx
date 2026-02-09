import React, { useState } from 'react';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Modal from '../components/Modal';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../styles/Home.css';

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

  const openModal = () => {
    setIsModalOpen(true);
  };

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
          {/* Хедер */}
          <Header 
            onOpenModal={openModal}
            onToggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />

          {/* Мобильное меню */}
          <MobileMenu 
            isOpen={isMenuOpen}
            onClose={closeMenu}
            onOpenModal={openModal}
          />

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
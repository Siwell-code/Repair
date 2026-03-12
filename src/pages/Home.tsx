import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Modal from '../components/Modal';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ProjectCard from '../components/Projects/ProjectCard';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 'court',
      title: 'Cуд',
      category: 'Государственные объекты',
      description: 'Профессиональный ремонт и реконструкция спортивного суда с современным покрытием и разметкой.',
      images: [
        'projects/court/1.jpg',
        'projects/court/2.jpg',
        'projects/court/3.jpg'
      ]
    },
    {
      id: 'school',
      title: 'Школа',
      category: 'Образовательные учреждения',
      description: 'Капитальный ремонт школьных помещений, создание комфортной и безопасной среды для обучения.',
      images: [
        'projects/school/1.jpg',
        'projects/school/2.jpg',
        'projects/school/3.jpg',
        'projects/school/4.jpg'
      ]
    },
    {
      id: 'house',
      title: 'Дом',
      category: 'Частные дома',
      description: 'Полный комплекс ремонтных работ в частном доме: от дизайн-проекта до чистовой отделки.',
      images: [
        'projects/house/1.jpg',
        'projects/house/2.jpg',
        'projects/house/3.jpg',
        'projects/house/4.jpg'
      ]
    },
    {
      id: 'ipsum',
      title: 'Ipsum',
      category: 'Коммерческая недвижимость',
      description: 'Ремонт аптечного помещения с учетом всех требований и стандартов фармацевтической деятельности.',
      images: [
        'projects/ipsum/1.jpg',
        'projects/ipsum/2.jpg',
        'projects/ipsum/3.jpg',
        'projects/ipsum/4.jpg'
      ]
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

        {/* Projects секция - Теперь используем ProjectCard */}
        <section
          id="projects"
          className="projects-section"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/projects.webp)`
          }}
        >
          <div className="section-overlay">
            <div className="section-header">
              <h2 className="section-title">Наши работы</h2>
              <Link to="/projects" className="section-link">
                Смотреть все проекты →
              </Link>
            </div>
            
            {/* Сетка проектов - используем те же карточки, что и на странице проектов */}
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  images={project.images}
                />
              ))}
            </div>

            {/* Кнопка "Все проекты" для мобильных */}
            <div className="mobile-projects-link">
              <Link to="/projects" className="mobile-projects-button">
                Все проекты
              </Link>
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
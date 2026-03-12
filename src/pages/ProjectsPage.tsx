import React, { useState } from 'react';
import ProjectCard from '../components/Projects/ProjectCard';
import '../styles/ProjectsPage.css';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
}

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'court',
      title: 'Cуд',
      category: 'Государственные объекты',
      description: 'Профессиональный ремонт и реконструкция спортивного суда с современным покрытием и разметкой.',
      images: [
        '/projects/court/1.jpg',
        '/projects/court/2.jpg',
        '/projects/court/3.jpg'
      ]
    },
    {
      id: 'school',
      title: 'Школа',
      category: 'Образовательные учреждения',
      description: 'Капитальный ремонт школьных помещений, создание комфортной и безопасной среды для обучения.',
      images: [
        '/projects/school/1.jpg',
        '/projects/school/2.jpg',
        '/projects/school/3.jpg',
        '/projects/school/4.jpg'
      ]
    },
    {
      id: 'house',
      title: 'Дом',
      category: 'Частные дома',
      description: 'Полный комплекс ремонтных работ в частном доме: от дизайн-проекта до чистовой отделки.',
      images: [
        '/projects/house/1.jpg',
        '/projects/house/2.jpg',
        '/projects/house/3.jpg',
        '/projects/house/4.jpg'
      ]
    },
    {
      id: 'ipsum',
      title: 'Ipsum',
      category: 'Коммерческая недвижимость',
      description: 'Ремонт аптечного помещения с учетом всех требований и стандартов фармацевтической деятельности.',
      images: [
        '/projects/ipsum/1.jpg',
        '/projects/ipsum/2.jpg',
        '/projects/ipsum/3.jpg',
        '/projects/ipsum/4.jpg'
      ]
    }
  ];

  const categories = ['all', 'Государственные объекты', 'Образовательные учреждения', 'Частные дома', 'Коммерческая недвижимость'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <h1 className="projects-title">Наши работы</h1>
        <p className="projects-subtitle">
          Более 100 успешно реализованных проектов. Каждый объект - уникальное сочетание качества и стиля.
        </p>
      </div>

      <div className="projects-container">
        {/* Фильтр по категориям */}
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'Все проекты' : category}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
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

        {/* Если нет проектов в выбранной категории */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>В этой категории пока нет проектов</p>
          </div>
        )}
      </div>

      {/* Секция с CTA */}
      <div className="projects-cta">
        <div className="cta-content">
          <h2>Хотите такой же результат?</h2>
          <p>Оставьте заявку, и мы обсудим ваш проект</p>
          <button className="cta-button">Заказать ремонт</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
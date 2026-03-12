import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Modal from '../Modal'; // Импортируем модалку
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="layout">
      {showHeader && (
        <Header 
          onOpenModal={openModal}
          onToggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
      )}
      <main className="layout-main">
        {children}
      </main>
      {/* Передаем openModal в Footer */}
      {showFooter && <Footer onOpenModal={openModal} />}
      
      {/* Добавляем модалку */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Layout;
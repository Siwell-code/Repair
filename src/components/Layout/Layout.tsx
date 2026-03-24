import React, { useState, useCallback, memo } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';
import Modal from '../Modal';
import FullscreenViewer from '../FullscreenViewer/FullscreenViewer';
import { FullscreenProvider } from '../../context/FullscreenContext';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <FullscreenProvider>
      <div className="layout">
        {showHeader && (
          <Header 
            onOpenModal={openModal}
            onToggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />
        )}
        
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onOpenModal={openModal}
        />
        
        <main className="layout-main">
          {children}
        </main>
        
        {showFooter && <Footer onOpenModal={openModal} />}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <FullscreenViewer />
      </div>
    </FullscreenProvider>
  );
};

export default memo(Layout);
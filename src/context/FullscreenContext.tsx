import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FullscreenContextType {
  isFullscreenOpen: boolean;
  fullscreenImage: string | null;
  fullscreenImages: string[];
  fullscreenIndex: number;
  fullscreenTitle: string;
  openFullscreen: (images: string[], index: number, title: string) => void;
  closeFullscreen: () => void;
  nextFullscreen: () => void;
  prevFullscreen: () => void;
}

const FullscreenContext = createContext<FullscreenContextType | undefined>(undefined);

export const useFullscreen = () => {
  const context = useContext(FullscreenContext);
  if (!context) {
    throw new Error('useFullscreen must be used within FullscreenProvider');
  }
  return context;
};

interface FullscreenProviderProps {
  children: ReactNode;
}

export const FullscreenProvider: React.FC<FullscreenProviderProps> = ({ children }) => {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fullscreenImages, setFullscreenImages] = useState<string[]>([]);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [fullscreenTitle, setFullscreenTitle] = useState('');

  const openFullscreen = (images: string[], index: number, title: string) => {
    setFullscreenImages(images);
    setFullscreenIndex(index);
    setFullscreenTitle(title);
    setIsFullscreenOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextFullscreen = () => {
    setFullscreenIndex((prev) => (prev + 1) % fullscreenImages.length);
  };

  const prevFullscreen = () => {
    setFullscreenIndex((prev) => (prev - 1 + fullscreenImages.length) % fullscreenImages.length);
  };

  return (
    <FullscreenContext.Provider value={{
      isFullscreenOpen,
      fullscreenImage: fullscreenImages[fullscreenIndex] || null,
      fullscreenImages,
      fullscreenIndex,
      fullscreenTitle,
      openFullscreen,
      closeFullscreen,
      nextFullscreen,
      prevFullscreen
    }}>
      {children}
    </FullscreenContext.Provider>
  );
};
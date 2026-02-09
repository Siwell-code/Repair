import React from 'react';
import { ReactComponent as LogoSvg } from './Logo.svg';
import '../../styles/LogoIcon.css'; 

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ 
  className 
}) => {
  return (
    <div className={`logo-container ${className || ''}`}>
      <LogoSvg 
        className="logo-svg"
      />
    </div>
  );
};

export default LogoIcon;
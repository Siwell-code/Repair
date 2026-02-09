import React from 'react';
import { ReactComponent as LogoSvg } from './Logo.svg';

interface LogoIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoIcon: React.FC<LogoIconProps> = ({ 
  className, 
  width = 50, 
  height = 50 
}) => {
  return (
    <LogoSvg 
      className={className}
      width={width}
      height={height}
    />
  );
};

export default LogoIcon;
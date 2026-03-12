import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const ClockIcon: React.FC<IconProps> = ({ 
  size = 18, 
  color = 'currentColor',
  className 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};

export default ClockIcon;
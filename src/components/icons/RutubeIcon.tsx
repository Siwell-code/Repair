import React from 'react';

interface RutubeIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const RutubeIcon: React.FC<RutubeIconProps> = ({ 
  className, 
  size = 24, 
  color = "currentColor" 
}) => {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z" 
        fill="#000000"
      />
      <path 
        d="M17.5 8.5C17.5 7.67 16.83 7 16 7H8C7.17 7 6.5 7.67 6.5 8.5V15.5C6.5 16.33 7.17 17 8 17H16C16.83 17 17.5 16.33 17.5 15.5V8.5ZM10.5 14.5V9.5L14 12L10.5 14.5Z" 
        fill="#FF0000"
      />
      <path 
        d="M10.5 14.5V9.5L14 12L10.5 14.5Z" 
        fill="white"
      />
    </svg>
  );
};

export default RutubeIcon;
import React from 'react';

interface VkIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const VkIcon: React.FC<VkIconProps> = ({ 
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
        fill="#4C75A3"
      />
      <path 
        d="M13.16 17.5C8.32 17.5 5.52 14.2 5.38 9H7.8C7.9 12.4 9.6 13.9 11.1 14.3V9H13.43V12.2C14.93 12.1 16.5 10.6 17.1 9H19.42C18.92 11.1 17.22 12.7 15.83 13.4C17.22 14 19.03 15.4 19.72 17.5H17.2C16.6 15.9 15.15 14.5 13.43 14.3V17.5H13.16Z" 
        fill="white"
      />
    </svg>
  );
};

export default VkIcon;
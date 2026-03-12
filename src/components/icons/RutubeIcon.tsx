import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const RutubeIcon: React.FC<IconProps> = ({ 
  size = 100, 
  color = 'currentColor',
  className 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="1 10 20 20" 
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        d="M0 11.441h15.515v-.002c.975 0 1.767.108 2.401.297a4.3 4.3 0 0 1 1.637.996c.449.483.765 1.021.95 1.64s.291 1.426.291 2.448v1.345c0 1.723-.291 3.013-.871 3.82-.58.808-1.284 1.298-2.85 1.535l4.249 5.865h-4.936l-3.855-5.838H4.408v5.838H0zm4.408 8.152h10.394v.001c.607 0 1.03-.08 1.24-.269.213-.188.344-.538.344-1.076v-1.507c0-.51-.131-.86-.343-1.049s-.634-.296-1.241-.296H4.408z" 
        clipRule="evenodd"
      />
    </svg>
  );
};

export default RutubeIcon;
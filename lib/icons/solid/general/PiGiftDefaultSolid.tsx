import React from 'react';

/**
 * PiGiftDefaultSolid icon from the solid style in general category.
 */
interface PiGiftDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGiftDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gift-default icon',
  ...props
}: PiGiftDefaultSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M6 4.5a3.5 3.5 0 0 1 6-2.45A3.5 3.5 0 0 1 17.663 6H20.5a2.5 2.5 0 0 1 0 5H13V6h1.5A1.5 1.5 0 1 0 13 4.5V6h-2V4.5A1.5 1.5 0 1 0 9.5 6H11v5H3.5a2.5 2.5 0 0 1 0-5h2.837A3.5 3.5 0 0 1 6 4.5Z" fill="currentColor"/><path d="M4 13h7v9H8.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 17.71 3 17.046 3 16.242V14a1 1 0 0 1 1-1Z" fill="currentColor"/><path d="M13 13v9h2.241c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V14a1 1 0 0 0-1-1z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiFireDefaultStroke icon from the stroke style in general category.
 */
interface PiFireDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFireDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fire-default icon',
  ...props
}: PiFireDefaultStrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c-5.333 0-8-4-8-8 0-2.634 1.199-5.075 2.694-6.985A16.4 16.4 0 0 0 8 8c2.003 0 4.663-3.488 4.6-5.875C14.877 2.935 20 7.555 20 13c0 4-2.667 8-8 8Zm0 0c.863-.001 1.733-.28 2.405-.85 2.893-2.448.621-6.854-.996-7.663-1.606.803-6.111 3.861-4.463 6.847C9.553 20.434 10.769 21 12 21Z" fill="none"/>
    </svg>
  );
}

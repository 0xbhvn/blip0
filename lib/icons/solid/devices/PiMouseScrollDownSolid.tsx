import React from 'react';

/**
 * PiMouseScrollDownSolid icon from the solid style in devices category.
 */
interface PiMouseScrollDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseScrollDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-scroll-down icon',
  ...props
}: PiMouseScrollDownSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M4 10a8 8 0 1 1 16 0v4a8 8 0 1 1-16 0zm6.8-1.1a1 1 0 0 0-1.6 1.2 11 11 0 0 0 1.875 1.946 1.47 1.47 0 0 0 1.85 0A11 11 0 0 0 14.8 10.1a1 1 0 1 0-1.6-1.2 9 9 0 0 1-1.2 1.308A9 9 0 0 1 10.8 8.9Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

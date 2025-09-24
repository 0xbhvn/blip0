import React from 'react';

/**
 * PiBallBasketballSolid icon from the solid style in sports category.
 */
interface PiBallBasketballSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBallBasketballSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ball-basketball icon',
  ...props
}: PiBallBasketballSolidProps): JSX.Element {
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
      <path d="M11 1.899a10.1 10.1 0 0 0-5.498 2.303A10.06 10.06 0 0 1 9.135 11H11z" fill="currentColor"/><path d="M7.123 11a8.06 8.06 0 0 0-3.03-5.364A10.1 10.1 0 0 0 1.897 11z" fill="currentColor"/><path d="M1.898 13h5.225a8.06 8.06 0 0 1-3.03 5.364A10.1 10.1 0 0 1 1.897 13Z" fill="currentColor"/><path d="M9.135 13H11v9.101a10.1 10.1 0 0 1-5.498-2.303A10.06 10.06 0 0 0 9.135 13Z" fill="currentColor"/><path d="M13 22.101a10.1 10.1 0 0 0 5.5-2.305A10.06 10.06 0 0 1 14.868 13H13z" fill="currentColor"/><path d="M16.88 13a8.06 8.06 0 0 0 3.029 5.362A10.1 10.1 0 0 0 22.1 13z" fill="currentColor"/><path d="M22.101 11h-5.22a8.06 8.06 0 0 1 3.028-5.362A10.1 10.1 0 0 1 22.1 11Z" fill="currentColor"/><path d="M14.868 11H13V1.899a10.1 10.1 0 0 1 5.5 2.305A10.06 10.06 0 0 0 14.868 11Z" fill="currentColor"/>
    </svg>
  );
}

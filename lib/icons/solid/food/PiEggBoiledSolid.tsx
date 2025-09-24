import React from 'react';

/**
 * PiEggBoiledSolid icon from the solid style in food category.
 */
interface PiEggBoiledSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEggBoiledSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'egg-boiled icon',
  ...props
}: PiEggBoiledSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M8.467 2.986C9.464 2.12 10.66 1.5 12 1.5s2.537.619 3.533 1.486c.997.869 1.86 2.04 2.565 3.301 1.4 2.505 2.291 5.575 2.291 7.824a8.389 8.389 0 1 1-16.778 0c0-2.25.892-5.32 2.292-7.824.704-1.26 1.567-2.432 2.564-3.3ZM12 9.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

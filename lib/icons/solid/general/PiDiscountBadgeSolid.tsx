import React from 'react';

/**
 * PiDiscountBadgeSolid icon from the solid style in general category.
 */
interface PiDiscountBadgeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDiscountBadgeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'discount-badge icon',
  ...props
}: PiDiscountBadgeSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9.132 21.005a3.925 3.925 0 0 0 5.736 0 1.93 1.93 0 0 1 1.472-.61 3.925 3.925 0 0 0 4.055-4.055 1.93 1.93 0 0 1 .61-1.472 3.925 3.925 0 0 0 0-5.736 1.93 1.93 0 0 1-.61-1.472 3.925 3.925 0 0 0-4.055-4.055 1.93 1.93 0 0 1-1.472-.61 3.925 3.925 0 0 0-5.736 0 1.93 1.93 0 0 1-1.472.61A3.925 3.925 0 0 0 3.605 7.66a1.93 1.93 0 0 1-.61 1.472 3.925 3.925 0 0 0 0 5.736c.406.38.628.916.61 1.472a3.925 3.925 0 0 0 4.055 4.055 1.93 1.93 0 0 1 1.472.61Zm7.01-11.227a1.1 1.1 0 1 0-1.556-1.556l-6.364 6.364a1.1 1.1 0 0 0 1.556 1.556zM7.9 9.25a1.35 1.35 0 1 1 2.7 0 1.35 1.35 0 0 1-2.7 0Zm7.214 4.514a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

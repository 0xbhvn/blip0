import React from 'react';

/**
 * PiFaceNoMouthSolid icon from the solid style in general category.
 */
interface PiFaceNoMouthSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceNoMouthSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'face-no-mouth icon',
  ...props
}: PiFaceNoMouthSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.605 22.15 12 17.606 1.85 12 1.85ZM9 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm7 1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

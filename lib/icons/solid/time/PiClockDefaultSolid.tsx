import React from 'react';

/**
 * PiClockDefaultSolid icon from the solid style in time category.
 */
interface PiClockDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiClockDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'clock-default icon',
  ...props
}: PiClockDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85c5.605 0 10.15 4.544 10.15 10.15S17.605 22.15 12 22.15 1.85 17.606 1.85 12ZM13 7.9a1 1 0 1 0-2 0v4.917c0 .512.261.99.694 1.265l2.812 1.79a1 1 0 1 0 1.074-1.688L13 12.542z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

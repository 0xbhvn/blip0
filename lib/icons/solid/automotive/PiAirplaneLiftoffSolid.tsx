import React from 'react';

/**
 * PiAirplaneLiftoffSolid icon from the solid style in automotive category.
 */
interface PiAirplaneLiftoffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneLiftoffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-liftoff icon',
  ...props
}: PiAirplaneLiftoffSolidProps): JSX.Element {
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
      <path d="M21 19a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM4.879 2.783a4 4 0 0 1 3.05.591l7.325 4.905 2.46-.659.2-.048a4 4 0 0 1 4.698 2.877l.043.2a2 2 0 0 1-1.262 2.187l-.195.063-13.366 3.58a4 4 0 0 1-4.187-1.399l-.186-.26-2.294-3.473A1 1 0 0 1 1.74 9.83l.674-.18.143-.034a2 2 0 0 1 1.015.07l2.842.962 1.21-.325-4.128-5.777a1 1 0 0 1 .555-1.547l.617-.165z" fill="currentColor"/>
    </svg>
  );
}

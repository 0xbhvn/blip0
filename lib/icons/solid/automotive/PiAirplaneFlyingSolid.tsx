import React from 'react';

/**
 * PiAirplaneFlyingSolid icon from the solid style in automotive category.
 */
interface PiAirplaneFlyingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneFlyingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-flying icon',
  ...props
}: PiAirplaneFlyingSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M5.178 3.43A1 1 0 0 1 6 3h.639a4 4 0 0 1 3.01 1.366L15.454 11H18a4 4 0 0 1 4 4 2 2 0 0 1-2 2H6.162a4 4 0 0 1-3.794-2.735L1.05 10.316A1 1 0 0 1 2 9h.697a2 2 0 0 1 1.11.336L6.303 11h1.254L5.064 4.351a1 1 0 0 1 .114-.921ZM3 19a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

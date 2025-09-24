import React from 'react';

/**
 * PiCalendarFilledSolid icon from the solid style in time category.
 */
interface PiCalendarFilledSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCalendarFilledSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'calendar-filled icon',
  ...props
}: PiCalendarFilledSolidProps): JSX.Element {
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
      <path d="M9 2a1 1 0 0 0-2 0v1.305a5 5 0 0 0-.679.228A7 7 0 0 0 2.533 7.32c-.214.518-.339 1.065-.413 1.68h19.76c-.074-.615-.199-1.162-.413-1.679a7 7 0 0 0-3.788-3.788A5 5 0 0 0 17 3.305V2a1 1 0 1 0-2 0v1.04C14.195 3 13.241 3 12.084 3h-.168C10.759 3 9.805 3 9 3.04z" fill="currentColor"/><path fillRule="evenodd" d="M21.99 11H2.01C2 11.581 2 12.235 2 12.974v.063c0 1.366 0 2.443.06 3.314.06.888.186 1.634.473 2.328a7 7 0 0 0 3.788 3.788c.694.287 1.44.413 2.328.474.87.059 1.948.059 3.314.059h.074c1.366 0 2.443 0 3.314-.06.888-.06 1.634-.186 2.328-.473a7 7 0 0 0 3.788-3.788c.287-.694.413-1.44.474-2.328.059-.87.059-1.947.059-3.314v-.063c0-.74 0-1.393-.01-1.974ZM6.9 14A1.1 1.1 0 0 1 8 12.9h.01a1.1 1.1 0 0 1 0 2.2H8A1.1 1.1 0 0 1 6.9 14Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H12a1.1 1.1 0 0 1-1.1-1.1Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H16a1.1 1.1 0 0 1-1.1-1.1Zm-8 4A1.1 1.1 0 0 1 8 16.9h.01a1.1 1.1 0 0 1 0 2.2H8A1.1 1.1 0 0 1 6.9 18Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H12a1.1 1.1 0 0 1-1.1-1.1Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H16a1.1 1.1 0 0 1-1.1-1.1Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

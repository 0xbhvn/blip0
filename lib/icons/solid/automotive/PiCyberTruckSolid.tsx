import React from 'react';

/**
 * PiCyberTruckSolid icon from the solid style in automotive category.
 */
interface PiCyberTruckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCyberTruckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cyber-truck icon',
  ...props
}: PiCyberTruckSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.233 6.028a1 1 0 0 0-.719.098l-9 5A1 1 0 0 0 0 12v3a1 1 0 0 0 1 1h2.17a3.001 3.001 0 0 0 5.66 0h6.34a3.001 3.001 0 0 0 5.66 0H22a1 1 0 0 0 .995-.9l.5-5a1 1 0 0 0-.762-1.072zM5 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm12 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

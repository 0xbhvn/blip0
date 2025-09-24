import React from 'react';

/**
 * PiPowerCircleSolid icon from the solid style in general category.
 */
interface PiPowerCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPowerCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'power-circle icon',
  ...props
}: PiPowerCircleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12ZM13 7a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zM8.799 9.6a1 1 0 0 0-1.6-1.2 6 6 0 1 0 9.6 0 1 1 0 0 0-1.598 1.2 4 4 0 1 1-6.402 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiToggleOffSolid icon from the solid style in general category.
 */
interface PiToggleOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiToggleOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'toggle-off icon',
  ...props
}: PiToggleOffSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M23 12a8 8 0 0 0-8-8H9a8 8 0 1 0 0 16h6a8 8 0 0 0 8-8Zm-9 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

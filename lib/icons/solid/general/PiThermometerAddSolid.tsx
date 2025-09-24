import React from 'react';

/**
 * PiThermometerAddSolid icon from the solid style in general category.
 */
interface PiThermometerAddSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThermometerAddSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'thermometer-add icon',
  ...props
}: PiThermometerAddSolidProps): React.ReactElement {
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
      <path d="M15 1a4 4 0 0 1 4 4v10a5 5 0 1 1-8 0V5a4 4 0 0 1 4-4Zm0 8a1 1 0 0 0-1 1v6.27A1.998 1.998 0 0 0 15 20a2 2 0 0 0 1-3.73V10a1 1 0 0 0-1-1ZM5 3a1 1 0 0 1 1 1v2h2l.103.005a1 1 0 0 1 0 1.99L8 8H6v2a1 1 0 1 1-2 0V8H2a1 1 0 0 1 0-2h2V4a1 1 0 0 1 1-1Z" fill="currentColor"/>
    </svg>
  );
}

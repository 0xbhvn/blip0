import React from 'react';

/**
 * PiThermometerSolid icon from the solid style in general category.
 */
interface PiThermometerSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThermometerSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'thermometer icon',
  ...props
}: PiThermometerSolidProps): React.ReactElement {
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
      <path d="M12 1a4 4 0 0 1 4 4v10a5 5 0 1 1-8 0V5a4 4 0 0 1 4-4Zm0 8a1 1 0 0 0-1 1v6.27A1.998 1.998 0 0 0 12 20a2 2 0 0 0 1-3.73V10a1 1 0 0 0-1-1Z" fill="currentColor"/>
    </svg>
  );
}

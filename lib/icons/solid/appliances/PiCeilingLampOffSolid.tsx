import React from 'react';

/**
 * PiCeilingLampOffSolid icon from the solid style in appliances category.
 */
interface PiCeilingLampOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCeilingLampOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ceiling-lamp-off icon',
  ...props
}: PiCeilingLampOffSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M13 4a1 1 0 1 0-2 0v2.05c-5.053.5-9 4.764-9 9.95a1 1 0 0 0 1 1h5.126a4.002 4.002 0 0 0 7.748 0H21a1 1 0 0 0 1-1c0-5.185-3.947-9.449-9-9.95zm-1 14a2 2 0 0 1-1.732-1h3.464A2 2 0 0 1 12 18Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

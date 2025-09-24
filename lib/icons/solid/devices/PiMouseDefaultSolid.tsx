import React from 'react';

/**
 * PiMouseDefaultSolid icon from the solid style in devices category.
 */
interface PiMouseDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-default icon',
  ...props
}: PiMouseDefaultSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M4 10a8 8 0 1 1 16 0v4a8 8 0 1 1-16 0zm9-2.05a1 1 0 1 0-2 0v2.1a1 1 0 1 0 2 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

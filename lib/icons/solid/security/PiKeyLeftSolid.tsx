import React from 'react';

/**
 * PiKeyLeftSolid icon from the solid style in security category.
 */
interface PiKeyLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-left icon',
  ...props
}: PiKeyLeftSolidProps): React.ReactElement {
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
      <path d="M18 7a5 5 0 0 0-4.9 4H2a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-2h2v1a1 1 0 1 0 2 0v-1h6.1a5.002 5.002 0 0 0 9.9-1 5 5 0 0 0-5-5Z" fill="currentColor"/>
    </svg>
  );
}

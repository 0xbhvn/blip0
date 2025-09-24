import React from 'react';

/**
 * PiDumbbellSolid icon from the solid style in sports category.
 */
interface PiDumbbellSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDumbbellSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'dumbbell icon',
  ...props
}: PiDumbbellSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M4 7a3 3 0 0 1 6 0v3h4V7a3 3 0 1 1 6 0v1a3 3 0 1 1 0 6v1a3 3 0 1 1-6 0v-3h-4v3a3 3 0 1 1-6 0v-1a3 3 0 1 1 0-6zm0 3a1 1 0 1 0 0 2zm16 2a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

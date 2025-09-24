import React from 'react';

/**
 * PiToggleOnSolid icon from the solid style in general category.
 */
interface PiToggleOnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiToggleOnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'toggle-on icon',
  ...props
}: PiToggleOnSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1 12a8 8 0 0 1 8-8h6a8 8 0 0 1 0 16H9a8 8 0 0 1-8-8Zm9 0a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

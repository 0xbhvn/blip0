import React from 'react';

/**
 * PiListArrowDownSolid icon from the solid style in general category.
 */
interface PiListArrowDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListArrowDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'list-arrow-down icon',
  ...props
}: PiListArrowDownSolidProps): React.ReactElement {
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
      <path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M20 11.5a1 1 0 0 0-2 0v3.9c-.33-.03-.666-.069-1.017-.11q-.422-.05-.882-.1a1 1 0 0 0-.901 1.596 16 16 0 0 0 2.727 2.83 1.7 1.7 0 0 0 2.146 0 16 16 0 0 0 2.727-2.83 1 1 0 0 0-.9-1.595q-.46.048-.883.099c-.35.041-.686.08-1.017.11z" fill="currentColor"/><path d="M4 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M4 17a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

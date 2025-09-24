import React from 'react';

/**
 * PiListSearchSolid icon from the solid style in general category.
 */
interface PiListSearchSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListSearchSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'list-search icon',
  ...props
}: PiListSearchSolidProps): JSX.Element {
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
      <path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M4 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M17.5 11c-2.21 0-4 1.79-4 4a3.998 3.998 0 0 0 6.032 3.446l.76.761a1 1 0 0 0 1.415-1.414l-.76-.761A3.998 3.998 0 0 0 17.5 11Z" fill="currentColor"/><path d="M4 17a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

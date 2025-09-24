import React from 'react';

/**
 * PiFilterHorizontalSolid icon from the solid style in general category.
 */
interface PiFilterHorizontalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilterHorizontalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'filter-horizontal icon',
  ...props
}: PiFilterHorizontalSolidProps): React.ReactElement {
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
      <path d="M13 3a4 4 0 0 0-3.874 3H3a1 1 0 0 0 0 2h6.126c.444 1.725 2.01 3 3.874 3h1a4 4 0 0 0 0-8z" fill="currentColor"/><path d="M20 6a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M9 13a4 4 0 0 0-3.874 3H3a1 1 0 1 0 0 2h2.126c.444 1.725 2.01 3 3.874 3h1a4 4 0 0 0 0-8z" fill="currentColor"/><path d="M16 16a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

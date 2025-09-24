import React from 'react';

/**
 * PiSearchBigZoomOutSolid icon from the solid style in general category.
 */
interface PiSearchBigZoomOutSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchBigZoomOutSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'search-big-zoom-out icon',
  ...props
}: PiSearchBigZoomOutSolidProps): JSX.Element {
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
      <path d="M2 11.5a9.5 9.5 0 1 1 16.888 5.973l2.82 2.82a1 1 0 0 1-1.415 1.414l-2.82-2.82A9.5 9.5 0 0 1 2 11.5Zm6.5-1a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

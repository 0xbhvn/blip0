import React from 'react';

/**
 * PiSearchDefaultZoomOutSolid icon from the solid style in general category.
 */
interface PiSearchDefaultZoomOutSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchDefaultZoomOutSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'search-default-zoom-out icon',
  ...props
}: PiSearchDefaultZoomOutSolidProps): React.ReactElement {
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
      <path d="M2 10a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10Zm5.001-1a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

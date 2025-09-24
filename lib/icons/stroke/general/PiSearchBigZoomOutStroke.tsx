import React from 'react';

/**
 * PiSearchBigZoomOutStroke icon from the stroke style in general category.
 */
interface PiSearchBigZoomOutStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchBigZoomOutStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'search-big-zoom-out icon',
  ...props
}: PiSearchBigZoomOutStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-3.49-3.49m0 0A8.5 8.5 0 1 0 5.49 5.49a8.5 8.5 0 0 0 12.02 12.02ZM8.5 11.5h6" fill="none"/>
    </svg>
  );
}

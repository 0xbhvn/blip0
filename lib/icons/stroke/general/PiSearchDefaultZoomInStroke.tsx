import React from 'react';

/**
 * PiSearchDefaultZoomInStroke icon from the stroke style in general category.
 */
interface PiSearchDefaultZoomInStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchDefaultZoomInStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'search-default-zoom-in icon',
  ...props
}: PiSearchDefaultZoomInStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6.05-6.05m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9ZM10 13v-3m0 0V7m0 3H7m3 0h3" fill="none"/>
    </svg>
  );
}

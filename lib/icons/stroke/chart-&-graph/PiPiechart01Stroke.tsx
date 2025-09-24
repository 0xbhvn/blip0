import React from 'react';

/**
 * PiPiechart01Stroke icon from the stroke style in chart-&-graph category.
 */
interface PiPiechart01StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPiechart01Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'piechart-01 icon',
  ...props
}: PiPiechart01StrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.335 15.574A9.044 9.044 0 1 1 8.426 3.665m3.618.604v6.33c0 .75.607 1.357 1.356 1.357h6.33c.75 0 1.368-.61 1.257-1.351a9.05 9.05 0 0 0-7.591-7.592c-.741-.111-1.352.507-1.352 1.256Z" fill="none"/>
    </svg>
  );
}

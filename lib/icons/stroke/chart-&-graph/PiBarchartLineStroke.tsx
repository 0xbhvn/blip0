import React from 'react';

/**
 * PiBarchartLineStroke icon from the stroke style in chart-&-graph category.
 */
interface PiBarchartLineStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBarchartLineStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'barchart-line icon',
  ...props
}: PiBarchartLineStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 20v-6m6 6V4m6 16V10" fill="none"/>
    </svg>
  );
}

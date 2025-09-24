import React from 'react';

/**
 * PiGraphChartPyramidStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphChartPyramidStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartPyramidStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-pyramid icon',
  ...props
}: PiGraphChartPyramidStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19.373 16.069 1.427 2.635c.573 1.059-.155 2.373-1.315 2.373H4.515c-1.16 0-1.888-1.314-1.315-2.373l1.427-2.635m14.746 0H4.627m14.746 0-2.707-5m-12.04 5 2.708-5m9.332 0-3.35-6.19a1.478 1.478 0 0 0-2.631 0l-3.351 6.19m9.332 0H7.334" fill="none"/>
    </svg>
  );
}

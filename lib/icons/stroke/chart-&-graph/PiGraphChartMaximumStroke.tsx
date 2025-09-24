import React from 'react';

/**
 * PiGraphChartMaximumStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphChartMaximumStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartMaximumStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-maximum icon',
  ...props
}: PiGraphChartMaximumStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H7a4 4 0 0 1-4-4V3m5 2h.01M11 5h.01M17 5h.01M20 5h.01m-6.02 0H14M7 17c.827-5.183 3.648-9 7-9s6.172 3.817 7 9" fill="none"/>
    </svg>
  );
}

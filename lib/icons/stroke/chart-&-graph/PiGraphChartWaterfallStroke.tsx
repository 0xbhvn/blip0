import React from 'react';

/**
 * PiGraphChartWaterfallStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphChartWaterfallStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartWaterfallStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-waterfall icon',
  ...props
}: PiGraphChartWaterfallStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H7a4 4 0 0 1-4-4V3m5 14v-3m4-1v-3m4-1V6m4 11V3" fill="none"/>
    </svg>
  );
}

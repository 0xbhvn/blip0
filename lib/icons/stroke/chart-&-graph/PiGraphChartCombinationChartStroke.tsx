import React from 'react';

/**
 * PiGraphChartCombinationChartStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphChartCombinationChartStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartCombinationChartStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-combination-chart icon',
  ...props
}: PiGraphChartCombinationChartStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.5 20v-5m5.333 5v-9m5.334 9v-5m5.333 5v-9m-16-1 5.333-5.5 5.334 5.5L19.5 4.5" fill="none"/>
    </svg>
  );
}

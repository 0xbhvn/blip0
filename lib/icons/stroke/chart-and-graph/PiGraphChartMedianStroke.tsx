import React from 'react';

/**
 * PiGraphChartMedianStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphChartMedianStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartMedianStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-median icon',
  ...props
}: PiGraphChartMedianStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H7a4 4 0 0 1-4-4V3m4 4 .223-.276c1.391-1.722 4.104-1.397 5.048.606l3.458 7.34c.944 2.002 3.657 2.329 5.048.606L21 15m-7-1v.01M14 17v.01M14 5v.01M14 8v.01" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiBubbleChartSolid icon from the solid style in chart-&-graph category.
 */
interface PiBubbleChartSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBubbleChartSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bubble-chart icon',
  ...props
}: PiBubbleChartSolidProps): JSX.Element {
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
      <path d="M15.5 3.1a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Z" fill="currentColor"/><path d="M6 10.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Z" fill="currentColor"/><path d="M13.5 15.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" fill="currentColor"/>
    </svg>
  );
}

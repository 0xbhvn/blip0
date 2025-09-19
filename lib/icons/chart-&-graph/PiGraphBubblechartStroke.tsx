import React from 'react';

/**
 * PiGraphBubblechartStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphBubblechartStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphBubblechartStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-bubblechart icon',
  ...props
}: PiGraphBubblechartStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H7a4 4 0 0 1-4-4V3m16 2.01V5m-8 5.01V10m-1 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiGraphBarLineSankeyStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphBarLineSankeyStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphBarLineSankeyStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-bar-line-sankey icon',
  ...props
}: PiGraphBarLineSankeyStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H7a4 4 0 0 1-3.874-3M3 3v3m18 0H3m18 11h-1.718a8 8 0 0 1-6.657-3.562l-.096-.144M21 10h-2a8 8 0 0 0-6.4 3.2l-.07.094M3 6v2m0 0h1.719a8 8 0 0 1 6.656 3.562l1.154 1.732M3 8v9q.002.519.126 1m9.403-4.706L11.4 14.8A8 8 0 0 1 5 18H3.126" fill="none"/>
    </svg>
  );
}

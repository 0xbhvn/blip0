import React from 'react';

/**
 * PiTrendlineUpStroke icon from the stroke style in chart-&-graph category.
 */
interface PiTrendlineUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrendlineUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'trendline-up icon',
  ...props
}: PiTrendlineUpStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 16.852.73-.937a21.8 21.8 0 0 1 6.61-5.664.696.696 0 0 1 .916.222l3.212 4.818a.64.64 0 0 0 .926.15 20.05 20.05 0 0 0 5.944-7.53l.321-.707M22 11.826a17.3 17.3 0 0 0-1.123-4.38.48.48 0 0 0-.218-.242M16.014 8.37a17.3 17.3 0 0 1 4.354-1.217.5.5 0 0 1 .291.051" fill="none"/>
    </svg>
  );
}

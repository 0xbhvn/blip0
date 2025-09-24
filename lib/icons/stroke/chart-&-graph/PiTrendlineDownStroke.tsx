import React from 'react';

/**
 * PiTrendlineDownStroke icon from the stroke style in chart-&-graph category.
 */
interface PiTrendlineDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrendlineDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'trendline-down icon',
  ...props
}: PiTrendlineDownStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 7.148.73.937a21.8 21.8 0 0 0 6.61 5.664c.316.176.715.08.916-.222l3.212-4.818a.64.64 0 0 1 .926-.15 20.05 20.05 0 0 1 5.944 7.53l.321.707M22 12.174a17.3 17.3 0 0 1-1.123 4.38.48.48 0 0 1-.218.242m-4.645-1.166a17.3 17.3 0 0 0 4.354 1.217.5.5 0 0 0 .291-.051" fill="none"/>
    </svg>
  );
}

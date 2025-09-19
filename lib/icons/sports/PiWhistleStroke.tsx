import React from 'react';

/**
 * PiWhistleStroke icon from the stroke style in sports category.
 */
interface PiWhistleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWhistleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'whistle icon',
  ...props
}: PiWhistleStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 10h9a1 1 0 0 1 1 1v1.687a1 1 0 0 1-.796.979l-6.23 1.298q.026.264.026.536A5.5 5.5 0 1 1 8.5 10zm0 0v2m0-9v3m5-1-1 1M6 5l1 1" fill="none"/>
    </svg>
  );
}

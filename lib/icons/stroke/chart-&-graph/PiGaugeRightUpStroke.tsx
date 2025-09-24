import React from 'react';

/**
 * PiGaugeRightUpStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGaugeRightUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeRightUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-right-up icon',
  ...props
}: PiGaugeRightUpStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.85a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15.535 8.464-4.108 2.803a.939.939 0 1 0 1.305 1.305z" fill="none"/>
    </svg>
  );
}

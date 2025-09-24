import React from 'react';

/**
 * PiGaugeSpeedometerTimerStroke icon from the stroke style in general category.
 */
interface PiGaugeSpeedometerTimerStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeSpeedometerTimerStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-speedometer-timer icon',
  ...props
}: PiGaugeSpeedometerTimerStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.85 12A9.15 9.15 0 1 0 12 2.85V6M8.464 8.464l4.108 2.804a.938.938 0 1 1-1.304 1.304z" fill="none"/>
    </svg>
  );
}

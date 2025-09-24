import React from 'react';

/**
 * PiGaugeLeftUpSolid icon from the solid style in chart-&-graph category.
 */
interface PiGaugeLeftUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeLeftUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-left-up icon',
  ...props
}: PiGaugeLeftUpSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12Zm6.746-4.803a1 1 0 0 0-1.4 1.4l3.47 4.623a1.826 1.826 0 1 0 2.553-2.555z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

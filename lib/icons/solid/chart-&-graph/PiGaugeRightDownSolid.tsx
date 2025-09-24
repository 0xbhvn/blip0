import React from 'react';

/**
 * PiGaugeRightDownSolid icon from the solid style in chart-&-graph category.
 */
interface PiGaugeRightDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeRightDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-right-down icon',
  ...props
}: PiGaugeRightDownSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12Zm13.554 4.804a1 1 0 0 0 1.4-1.4l-3.469-4.623a1.825 1.825 0 1 0-2.554 2.554z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

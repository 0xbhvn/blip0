import React from 'react';

/**
 * PiGaugeUpSolid icon from the solid style in chart-&-graph category.
 */
interface PiGaugeUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGaugeUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'gauge-up icon',
  ...props
}: PiGaugeUpSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12Zm11.14-5.803a1 1 0 0 0-1.98 0l-.816 5.721a1.824 1.824 0 1 0 3.612 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

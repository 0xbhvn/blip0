import React from 'react';

/**
 * PiTrendlineDownSolid icon from the solid style in chart-&-graph category.
 */
interface PiTrendlineDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrendlineDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'trendline-down icon',
  ...props
}: PiTrendlineDownSolidProps): React.ReactElement {
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
      <path d="M2.79 6.534a1 1 0 0 0-1.58 1.228l.73.937a22.8 22.8 0 0 0 6.914 5.924 1.696 1.696 0 0 0 2.234-.542l2.995-4.492a19 19 0 0 1 3.741 4.064q-.474.25-.959.476l-1.274.595a1 1 0 0 0 .03 1.826 18.3 18.3 0 0 0 4.606 1.287 1.476 1.476 0 0 0 1.578-.91 18.3 18.3 0 0 0 1.188-4.633 1 1 0 0 0-1.566-.94l-1.153.807q-.354.248-.718.482a21 21 0 0 0-4.548-4.874 1.64 1.64 0 0 0-2.372.386L9.58 12.737a20.8 20.8 0 0 1-6.062-5.265z" fill="currentColor"/>
    </svg>
  );
}

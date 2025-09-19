import React from 'react';

/**
 * PiBatteryThreeCellStroke icon from the stroke style in devices category.
 */
interface PiBatteryThreeCellStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBatteryThreeCellStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'battery-three-cell icon',
  ...props
}: PiBatteryThreeCellStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 14c.465 0 .698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C22 12.697 22 12.464 22 12s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C20.697 10 20.464 10 20 10M6 10v4m5-4v4m5-4v4m-8 4h6c1.864 0 2.796 0 3.53-.305a4 4 0 0 0 2.165-2.164C20 14.796 20 13.864 20 12s0-2.796-.305-3.53a4 4 0 0 0-2.164-2.166C16.796 6 15.864 6 14 6H8c-1.864 0-2.796 0-3.53.304A4 4 0 0 0 2.303 8.47C2 9.204 2 10.136 2 12s0 2.796.304 3.53a4 4 0 0 0 2.165 2.165C5.204 18 6.136 18 8 18Z" fill="none"/>
    </svg>
  );
}

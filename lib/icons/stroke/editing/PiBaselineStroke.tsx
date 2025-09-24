import React from 'react';

/**
 * PiBaselineStroke icon from the stroke style in editing category.
 */
interface PiBaselineStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBaselineStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'baseline icon',
  ...props
}: PiBaselineStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 16 2.982-8.45c.927-2.625 1.39-3.937 2.072-4.303a2 2 0 0 1 1.892 0c.682.366 1.145 1.678 2.072 4.303L18 16M8 11h8m1 9H7" fill="none"/>
    </svg>
  );
}

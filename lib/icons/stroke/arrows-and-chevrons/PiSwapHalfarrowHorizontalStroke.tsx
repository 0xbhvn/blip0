import React from 'react';

/**
 * PiSwapHalfarrowHorizontalStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiSwapHalfarrowHorizontalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapHalfarrowHorizontalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-halfarrow-horizontal icon',
  ...props
}: PiSwapHalfarrowHorizontalStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.887 18a20.2 20.2 0 0 1-3.747-3.604A.63.63 0 0 1 3 14h15m-.887-8a20.2 20.2 0 0 1 3.747 3.604c.093.116.14.256.14.396H6" fill="none"/>
    </svg>
  );
}

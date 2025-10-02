import React from 'react';

/**
 * PiSwapArrowHorizontalStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiSwapArrowHorizontalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapArrowHorizontalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-arrow-horizontal icon',
  ...props
}: PiSwapArrowHorizontalStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.887 12a20.2 20.2 0 0 0-3.747 3.604A.63.63 0 0 0 3 16m3.887 4a20.2 20.2 0 0 1-3.747-3.604A.63.63 0 0 1 3 16m0 0h14m.113-12a20.2 20.2 0 0 1 3.747 3.604c.093.116.14.256.14.396m-3.887 4a20.2 20.2 0 0 0 3.747-3.604A.63.63 0 0 0 21 8m0 0H7" fill="none"/>
    </svg>
  );
}

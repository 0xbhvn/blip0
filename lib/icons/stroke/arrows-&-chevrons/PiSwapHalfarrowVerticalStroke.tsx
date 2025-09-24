import React from 'react';

/**
 * PiSwapHalfarrowVerticalStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiSwapHalfarrowVerticalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapHalfarrowVerticalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-halfarrow-vertical icon',
  ...props
}: PiSwapHalfarrowVerticalStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 17.113a20.2 20.2 0 0 1-3.604 3.747A.63.63 0 0 1 14 21V6m-8 .887A20.2 20.2 0 0 1 9.604 3.14.63.63 0 0 1 10 3v15" fill="none"/>
    </svg>
  );
}

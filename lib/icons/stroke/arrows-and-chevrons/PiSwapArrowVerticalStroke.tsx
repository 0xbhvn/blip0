import React from 'react';

/**
 * PiSwapArrowVerticalStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiSwapArrowVerticalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapArrowVerticalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-arrow-vertical icon',
  ...props
}: PiSwapArrowVerticalStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.113a20.2 20.2 0 0 0 3.604 3.747c.116.093.256.14.396.14m4-3.887a20.2 20.2 0 0 1-3.604 3.747A.63.63 0 0 1 16 21m0 0V7M4 6.887A20.2 20.2 0 0 1 7.604 3.14.63.63 0 0 1 8 3m4 3.887A20.2 20.2 0 0 0 8.396 3.14.63.63 0 0 0 8 3m0 0v14" fill="none"/>
    </svg>
  );
}

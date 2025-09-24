import React from 'react';

/**
 * PiSwapArrowVerticalSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiSwapArrowVerticalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapArrowVerticalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-arrow-vertical icon',
  ...props
}: PiSwapArrowVerticalSolidProps): JSX.Element {
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
      <path d="M20.804 17.708a1 1 0 0 0-.878-1.592l-2.223.165q-.352.026-.703.041V7a1 1 0 1 0-2 0v9.322q-.351-.015-.703-.041l-2.223-.165a1 1 0 0 0-.878 1.592 21.2 21.2 0 0 0 3.783 3.933 1.63 1.63 0 0 0 2.042 0 21.2 21.2 0 0 0 3.783-3.933Z" fill="currentColor"/><path d="M11.926 7.884a1 1 0 0 0 .878-1.592A21.2 21.2 0 0 0 9.021 2.36a1.63 1.63 0 0 0-2.042 0 21.2 21.2 0 0 0-3.783 3.933 1 1 0 0 0 .878 1.592l2.223-.165q.352-.026.703-.041V17a1 1 0 1 0 2 0V7.678q.351.015.703.041z" fill="currentColor"/>
    </svg>
  );
}

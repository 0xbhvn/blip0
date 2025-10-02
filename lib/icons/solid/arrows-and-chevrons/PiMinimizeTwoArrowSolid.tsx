import React from 'react';

/**
 * PiMinimizeTwoArrowSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiMinimizeTwoArrowSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinimizeTwoArrowSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'minimize-two-arrow icon',
  ...props
}: PiMinimizeTwoArrowSolidProps): React.ReactElement {
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
      <path d="M13.56 11.909c1.859.172 3.743.1 5.605-.211a1 1 0 0 0 .488-1.744l-1.73-1.493a23 23 0 0 1-2.384-2.384l-1.493-1.73a1 1 0 0 0-1.744.488 21.8 21.8 0 0 0-.21 5.604 1.62 1.62 0 0 0 1.469 1.47Z" fill="currentColor"/><path d="M4.835 12.302a21.8 21.8 0 0 1 5.604-.21 1.62 1.62 0 0 1 1.47 1.469c.172 1.858.1 3.742-.211 5.604a1 1 0 0 1-1.744.488l-1.493-1.73a23 23 0 0 0-2.384-2.384l-1.73-1.493a1 1 0 0 1 .488-1.744Z" fill="currentColor"/>
    </svg>
  );
}

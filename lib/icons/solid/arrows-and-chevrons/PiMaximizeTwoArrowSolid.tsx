import React from 'react';

/**
 * PiMaximizeTwoArrowSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiMaximizeTwoArrowSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeTwoArrowSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-two-arrow icon',
  ...props
}: PiMaximizeTwoArrowSolidProps): React.ReactElement {
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
      <path d="M11.835 5.302a21.8 21.8 0 0 1 5.604-.21 1.624 1.624 0 0 1 1.47 1.469c.172 1.858.1 3.742-.211 5.604a1 1 0 0 1-1.776.45l-.047-.06a31 31 0 0 0-5.43-5.43l-.06-.047a1 1 0 0 1 .45-1.776Z" fill="currentColor"/><path d="M6.56 18.909c1.859.172 3.743.1 5.605-.211a1 1 0 0 0 .45-1.776l-.06-.047a31 31 0 0 1-5.43-5.43l-.047-.06a1 1 0 0 0-1.776.45 21.8 21.8 0 0 0-.21 5.604 1.624 1.624 0 0 0 1.469 1.47Z" fill="currentColor"/>
    </svg>
  );
}

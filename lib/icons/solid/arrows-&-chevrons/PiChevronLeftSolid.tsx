import React from 'react';

/**
 * PiChevronLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-left icon',
  ...props
}: PiChevronLeftSolidProps): JSX.Element {
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
      <path d="M9.327 12.925a21.4 21.4 0 0 0 4.08 3.88 1 1 0 0 0 1.59-.881 52 52 0 0 1 0-7.848 1 1 0 0 0-1.59-.881 21.4 21.4 0 0 0-4.08 3.88 1.47 1.47 0 0 0 0 1.85Z" fill="currentColor"/>
    </svg>
  );
}

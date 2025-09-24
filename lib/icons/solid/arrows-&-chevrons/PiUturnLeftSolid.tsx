import React from 'react';

/**
 * PiUturnLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiUturnLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-left icon',
  ...props
}: PiUturnLeftSolidProps): JSX.Element {
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
      <path d="M15 9a4 4 0 0 1 0 8h-3a1 1 0 1 0 0 2h3a6 6 0 0 0 0-12H8.817q.015-.346.04-.69l.171-2.32a1 1 0 0 0-1.586-.882A21.8 21.8 0 0 0 3.37 6.964a1.64 1.64 0 0 0 0 2.071 21.8 21.8 0 0 0 4.073 3.856 1 1 0 0 0 1.586-.882l-.17-2.32Q8.83 9.345 8.816 9z" fill="currentColor"/>
    </svg>
  );
}

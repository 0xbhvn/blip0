import React from 'react';

/**
 * PiUturnDownSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiUturnDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-down icon',
  ...props
}: PiUturnDownSolidProps): JSX.Element {
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
      <path d="M9 9a4 4 0 1 1 8 0v3a1 1 0 1 0 2 0V9A6 6 0 0 0 7 9v6.183q-.345-.015-.69-.04l-2.32-.171a1 1 0 0 0-.882 1.586 21.8 21.8 0 0 0 3.856 4.073 1.64 1.64 0 0 0 2.072 0 21.8 21.8 0 0 0 3.856-4.073 1 1 0 0 0-.882-1.586l-2.32.17q-.345.027-.69.041z" fill="currentColor"/>
    </svg>
  );
}

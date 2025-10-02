import React from 'react';

/**
 * PiUturnRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiUturnRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-right icon',
  ...props
}: PiUturnRightSolidProps): React.ReactElement {
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
      <path d="M9 9a4 4 0 0 0 0 8h3a1 1 0 1 1 0 2H9A6 6 0 0 1 9 7h6.183q-.015-.346-.04-.69l-.171-2.32a1 1 0 0 1 1.586-.882 21.8 21.8 0 0 1 4.073 3.856 1.64 1.64 0 0 1 0 2.071 21.8 21.8 0 0 1-4.073 3.856 1 1 0 0 1-1.586-.882l.17-2.32q.027-.345.041-.69z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiEggDefaultSolid icon from the solid style in food category.
 */
interface PiEggDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEggDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'egg-default icon',
  ...props
}: PiEggDefaultSolidProps): JSX.Element {
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
      <path d="M12 1.5c-1.34 0-2.536.619-3.533 1.486-.997.869-1.86 2.04-2.564 3.301-1.4 2.505-2.292 5.575-2.292 7.824a8.389 8.389 0 1 0 16.778 0c0-2.25-.892-5.32-2.291-7.824-.705-1.26-1.568-2.432-2.565-3.3S13.341 1.5 12 1.5Z" fill="currentColor"/>
    </svg>
  );
}

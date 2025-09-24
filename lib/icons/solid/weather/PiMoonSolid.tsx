import React from 'react';

/**
 * PiMoonSolid icon from the solid style in weather category.
 */
interface PiMoonSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMoonSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'moon icon',
  ...props
}: PiMoonSolidProps): React.ReactElement {
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
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10v-.038a1 1 0 0 0-1.846-.53 5.5 5.5 0 1 1-7.586-7.586A1 1 0 0 0 12.038 2z" fill="currentColor"/>
    </svg>
  );
}

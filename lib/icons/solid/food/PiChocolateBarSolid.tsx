import React from 'react';

/**
 * PiChocolateBarSolid icon from the solid style in food category.
 */
interface PiChocolateBarSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChocolateBarSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chocolate-bar icon',
  ...props
}: PiChocolateBarSolidProps): React.ReactElement {
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
      <path d="M11.1 1H7.5A3.5 3.5 0 0 0 4 4.5v3.6h7.1z" fill="currentColor"/><path d="M4 9.9v4.2h7.1V9.9z" fill="currentColor"/><path d="M4 15.9v3.6A3.5 3.5 0 0 0 7.5 23h3.6v-7.1z" fill="currentColor"/><path d="M12.9 23h3.6a3.5 3.5 0 0 0 3.5-3.5v-3.6h-7.1z" fill="currentColor"/><path d="M20 14.1V9.9h-7.1v4.2z" fill="currentColor"/><path d="M20 8.1V8a1 1 0 0 0-1-1 2 2 0 0 1-1.98-1.717 1 1 0 0 0-1.063-.86 4 4 0 0 1-3.057-1.42V8.1z" fill="currentColor"/>
    </svg>
  );
}

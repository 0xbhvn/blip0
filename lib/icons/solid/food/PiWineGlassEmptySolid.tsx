import React from 'react';

/**
 * PiWineGlassEmptySolid icon from the solid style in food category.
 */
interface PiWineGlassEmptySolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWineGlassEmptySolid({
  size = 24,
  color,
  className,
  ariaLabel = 'wine-glass-empty icon',
  ...props
}: PiWineGlassEmptySolidProps): JSX.Element {
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
      <path d="M7.302 1a1 1 0 0 0-.868.502A11 11 0 0 0 5 6.89c0 3.561 2.361 6.579 6 7.048V21H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-7.063c3.639-.47 6-3.487 6-7.048 0-1.914-.535-3.82-1.434-5.387A1 1 0 0 0 16.698 1z" fill="currentColor"/>
    </svg>
  );
}

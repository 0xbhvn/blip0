import React from 'react';

/**
 * PiSunSolid icon from the solid style in weather category.
 */
interface PiSunSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSunSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'sun icon',
  ...props
}: PiSunSolidProps): JSX.Element {
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
      <g fill="currentColor" clipPath="url(#a)"><path d="M12 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" fill="currentColor"/><path d="M3.515 3.515a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414Z" fill="currentColor"/><path d="M20.485 3.515a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z" fill="currentColor"/><path d="M0 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M21 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M5.636 18.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Z" fill="currentColor"/><path d="M18.364 18.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414Z" fill="currentColor"/><path d="M12 21a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" fill="currentColor"/><path d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z" fill="currentColor"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z" fill="currentColor"/></clipPath></defs>
    </svg>
  );
}

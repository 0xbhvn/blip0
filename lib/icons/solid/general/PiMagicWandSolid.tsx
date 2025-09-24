import React from 'react';

/**
 * PiMagicWandSolid icon from the solid style in general category.
 */
interface PiMagicWandSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMagicWandSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'magic-wand icon',
  ...props
}: PiMagicWandSolidProps): JSX.Element {
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
      <path d="M15.5 17a1 1 0 0 1 .93.633c.134.338.24.494.338.593s.255.207.6.343l.136.067a1 1 0 0 1 0 1.728l-.137.067c-.344.136-.501.245-.6.343-.073.075-.15.18-.241.371l-.095.222a1 1 0 0 1-1.795.137l-.066-.137c-.134-.338-.24-.494-.337-.593a1.3 1.3 0 0 0-.374-.247l-.226-.096a1 1 0 0 1 0-1.862l.226-.096c.194-.093.3-.174.374-.247.098-.1.203-.255.337-.593l.066-.137A1 1 0 0 1 15.5 17Z" fill="currentColor"/><path fillRule="evenodd" d="M16.734 3.127a2 2 0 0 1 2.828 0l1.06 1.06.137.153a2 2 0 0 1-.137 2.676L6.766 20.873a2 2 0 0 1-2.828 0l-1.06-1.06a2 2 0 0 1 0-2.829zM15.069 7.62l1.06 1.06 3.08-3.078-1.061-1.061z" clipRule="evenodd" fill="currentColor"/><path d="M20.5 11a1 1 0 0 1 .93.633c.134.338.24.494.338.593s.255.207.6.343l.136.067a1.001 1.001 0 0 1-.137 1.795c-.344.136-.501.245-.6.343-.073.075-.15.18-.241.372l-.095.221a1 1 0 0 1-1.861 0c-.134-.338-.24-.494-.337-.593a1.3 1.3 0 0 0-.374-.247l-.226-.096a1 1 0 0 1 0-1.862l.226-.096c.193-.093.3-.174.374-.247.098-.1.203-.255.337-.593l.066-.137A1 1 0 0 1 20.5 11Z" fill="currentColor"/><path d="M7.476 1a1 1 0 0 1 .93.633l.176.41c.174.367.344.612.533.803.253.253.607.478 1.228.723l.137.067a1.002 1.002 0 0 1-.137 1.795c-.621.245-.975.47-1.228.723-.189.191-.359.436-.533.803l-.176.41a1.002 1.002 0 0 1-1.794.137l-.067-.137c-.24-.607-.456-.958-.709-1.213-.22-.222-.52-.422-1.007-.633l-.22-.09a1 1 0 0 1 0-1.862l.22-.09c.488-.211.787-.411 1.007-.633.253-.255.47-.606.71-1.213l.066-.137A1 1 0 0 1 7.476 1Z" fill="currentColor"/>
    </svg>
  );
}

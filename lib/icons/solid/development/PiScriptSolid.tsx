import React from 'react';

/**
 * PiScriptSolid icon from the solid style in development category.
 */
interface PiScriptSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScriptSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'script icon',
  ...props
}: PiScriptSolidProps): JSX.Element {
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
      <path d="M9.707 6.293a1 1 0 0 0-1.414 1.414L9.586 9l-1.293 1.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z" fill="currentColor"/><path d="M13 11a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1Z" fill="currentColor"/><path fillRule="evenodd" d="M2 18c0-1.482.805-2.774 2-3.465V9.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 6.73 2.544c.592-.302 1.233-.428 1.961-.487C9.4 2 10.273 2 11.357 2h2.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C21 7.4 21 8.273 21 9.357v5.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.748.381-1.584.486-2.59.523-.578.022-1.261.022-2.063.022H6a4 4 0 0 1-4-4ZM8.854 4.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C6.001 7.471 6 8.264 6 9.4V14h10a1 1 0 1 1 0 2 2 2 0 0 0-.31 3.976c.894-.038 1.342-.135 1.672-.303a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546V9.4c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C15.529 4.001 14.736 4 13.6 4h-2.2c-1.137 0-1.929 0-2.546.051Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

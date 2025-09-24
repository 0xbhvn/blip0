import React from 'react';

/**
 * PiCookieSolid icon from the solid style in food category.
 */
interface PiCookieSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCookieSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cookie icon',
  ...props
}: PiCookieSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12.161 3.301A1 1 0 0 0 11.11 2.04C6.003 2.491 2 6.777 2 12c0 5.523 4.477 10 10 10 4.782 0 8.779-3.356 9.766-7.84a1 1 0 0 0-.82-1.203A3.5 3.5 0 0 1 18.02 9.87a1 1 0 0 0-1.088-.891A4.5 4.5 0 0 1 12.16 3.3ZM8.404 7.193a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1ZM6 13.018a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm6.717 1.748a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-1.927 1.918a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1Z" clipRule="evenodd" fill="currentColor"/><path d="M17 5a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z" fill="currentColor"/><path d="M20 4a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" fill="currentColor"/><path d="M22 9a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z" fill="currentColor"/>
    </svg>
  );
}

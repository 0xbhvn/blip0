import React from 'react';

/**
 * PiTelescopeStroke icon from the stroke style in devices category.
 */
interface PiTelescopeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTelescopeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'telescope icon',
  ...props
}: PiTelescopeStrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.901 14.803 16 21m-8 0 3.099-6.197" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.525 6.262a2 2 0 0 1 1.414-2.45l1.932-.517 2.448 9.136-1.932.518a2 2 0 0 1-2.45-1.414z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.513 10.05-1.74.59a1 1 0 0 0-.646 1.206l.55 2.054a1 1 0 0 0 1.162.722l6.154-1.227m-5.48-3.345 11.942-4.048M4.513 10.05 4.098 8.5m13.91 3.297-4.007.8" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="none"/>
    </svg>
  );
}

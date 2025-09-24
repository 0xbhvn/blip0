import React from 'react';

/**
 * PiServerCheckSolid icon from the solid style in development category.
 */
interface PiServerCheckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiServerCheckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'server-check icon',
  ...props
}: PiServerCheckSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M2 6.4A3.4 3.4 0 0 1 5.4 3h13.2A3.4 3.4 0 0 1 22 6.4v1.2a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 7.6zM14 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" fill="currentColor"/><path d="M2 16.4A3.4 3.4 0 0 1 5.4 13h13.2c.818 0 1.568.289 2.155.77q-.23.105-.447.253a16.7 16.7 0 0 0-2.82 2.428 3 3 0 0 0-3.898 4.54l.01.009H5.4A3.4 3.4 0 0 1 2 17.6z" fill="currentColor"/><path d="M22.564 17.326a1 1 0 1 0-1.128-1.652 14.7 14.7 0 0 0-3.768 3.736l-1.251-1.25a1 1 0 1 0-1.414 1.415l2.135 2.133a1 1 0 0 0 1.575-.212 12.66 12.66 0 0 1 3.85-4.17Z" fill="currentColor"/>
    </svg>
  );
}

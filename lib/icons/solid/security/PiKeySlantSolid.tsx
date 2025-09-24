import React from 'react';

/**
 * PiKeySlantSolid icon from the solid style in security category.
 */
interface PiKeySlantSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeySlantSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-slant icon',
  ...props
}: PiKeySlantSolidProps): React.ReactElement {
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
      <path d="M3.748 12.121a5 5 0 0 1 6.293-.636l7.849-7.849a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 1 1-1.414 1.415l-1.414-1.415-1.414 1.415.707.707a1 1 0 0 1-1.414 1.414l-.707-.707-4.314 4.313a5.002 5.002 0 0 1-7.707 6.294 5 5 0 0 1 0-7.072Z" fill="currentColor"/>
    </svg>
  );
}

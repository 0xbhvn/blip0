import React from 'react';

/**
 * PiIncognitoSolid icon from the solid style in media category.
 */
interface PiIncognitoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiIncognitoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'incognito icon',
  ...props
}: PiIncognitoSolidProps): React.ReactElement {
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
      <path d="m17.854 4.35 2.388 4.48q1.014.206 2.008.462a1 1 0 1 1-.499 1.937 39 39 0 0 0-2.356-.529 39.4 39.4 0 0 0-14.79 0q-1.19.229-2.356.529a1 1 0 1 1-.498-1.937q.995-.255 2.007-.463l2.389-4.478a4 4 0 0 1 4.025-2.087c1.317.165 2.34.165 3.656 0a4 4 0 0 1 4.026 2.087Z" fill="currentColor"/><path d="M6 12a5 5 0 1 0 4.9 6h2.2a5.002 5.002 0 0 0 9.9-1 5 5 0 0 0-9.9-1h-2.2A5 5 0 0 0 6 12Z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiKeyRight02Solid icon from the solid style in security category.
 */
interface PiKeyRight02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyRight02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-right-02 icon',
  ...props
}: PiKeyRight02SolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M11.11 9a5.5 5.5 0 1 0 0 6H14a1 1 0 0 0 .707-.293l.793-.793.793.793A1 1 0 0 0 17 15h3a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 20 9zm-6.27 1.12A1.1 1.1 0 0 1 6.6 11v2a1.1 1.1 0 0 1-1.76.88 2.35 2.35 0 0 1 0-3.76Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

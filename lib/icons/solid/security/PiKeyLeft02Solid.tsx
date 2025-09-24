import React from 'react';

/**
 * PiKeyLeft02Solid icon from the solid style in security category.
 */
interface PiKeyLeft02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyLeft02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-left-02 icon',
  ...props
}: PiKeyLeft02SolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12.89 9a5.5 5.5 0 1 1 0 6H10a1 1 0 0 1-.707-.293l-.793-.793-.793.793A1 1 0 0 1 7 15H4a1 1 0 0 1-.707-.293l-2-2a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 4 9zm6.27 1.12a1.1 1.1 0 0 0-1.76.88v2a1.1 1.1 0 0 0 1.76.88 2.35 2.35 0 0 0 0-3.76Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

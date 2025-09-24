import React from 'react';

/**
 * PiCheckTickCircleSolid icon from the solid style in general category.
 */
interface PiCheckTickCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-circle icon',
  ...props
}: PiCheckTickCircleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12Zm14.214-1.328a1 1 0 1 0-1.128-1.652l-.101.07a16 16 0 0 0-4.174 4.168l-1.454-1.453a1 1 0 0 0-1.414 1.415l2.341 2.339a1 1 0 0 0 1.575-.211 14 14 0 0 1 4.254-4.607z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

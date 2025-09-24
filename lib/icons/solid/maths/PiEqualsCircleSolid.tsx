import React from 'react';

/**
 * PiEqualsCircleSolid icon from the solid style in maths category.
 */
interface PiEqualsCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEqualsCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'equals-circle icon',
  ...props
}: PiEqualsCircleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12ZM8.9 9a1 1 0 0 0 0 2h6.2a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6.2a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

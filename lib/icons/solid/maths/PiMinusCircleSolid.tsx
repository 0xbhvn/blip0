import React from 'react';

/**
 * PiMinusCircleSolid icon from the solid style in maths category.
 */
interface PiMinusCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinusCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'minus-circle icon',
  ...props
}: PiMinusCircleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12Zm7.05-1a1 1 0 1 0 0 2h6.2a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

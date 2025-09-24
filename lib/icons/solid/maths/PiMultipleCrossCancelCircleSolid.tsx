import React from 'react';

/**
 * PiMultipleCrossCancelCircleSolid icon from the solid style in maths category.
 */
interface PiMultipleCrossCancelCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMultipleCrossCancelCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'multiple-cross-cancel-circle icon',
  ...props
}: PiMultipleCrossCancelCircleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85c5.605 0 10.15 4.544 10.15 10.15 0 5.605-4.545 10.15-10.15 10.15S1.85 17.606 1.85 12Zm7.757-3.807a1 1 0 1 0-1.414 1.414L10.585 12l-2.392 2.393a1 1 0 1 0 1.414 1.414L12 13.414l2.393 2.393a1 1 0 0 0 1.414-1.414L13.414 12l2.393-2.393a1 1 0 0 0-1.414-1.414L12 10.586z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

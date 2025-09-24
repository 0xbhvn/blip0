import React from 'react';

/**
 * PiPinSlantSolid icon from the solid style in general category.
 */
interface PiPinSlantSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPinSlantSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pin-slant icon',
  ...props
}: PiPinSlantSolidProps): JSX.Element {
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
      <path d="M15.788 3.082a2.6 2.6 0 0 0-3.877.644L9.715 7.317a.47.47 0 0 1-.27.217.94.94 0 0 1-.503-.004 5.54 5.54 0 0 0-5.246 1.461 1.504 1.504 0 0 0-.14 1.967 49 49 0 0 0 3.688 4.385L2.775 19.81a1 1 0 1 0 1.415 1.414l4.468-4.468a49 49 0 0 0 4.385 3.688c.599.449 1.437.39 1.966-.14a5.54 5.54 0 0 0 1.461-5.246.94.94 0 0 1-.003-.504.47.47 0 0 1 .216-.269l3.592-2.196a2.6 2.6 0 0 0 .644-3.877 39 39 0 0 0-5.131-5.131Z" fill="currentColor"/>
    </svg>
  );
}

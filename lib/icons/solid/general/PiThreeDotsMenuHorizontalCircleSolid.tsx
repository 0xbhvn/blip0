import React from 'react';

/**
 * PiThreeDotsMenuHorizontalCircleSolid icon from the solid style in general category.
 */
interface PiThreeDotsMenuHorizontalCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThreeDotsMenuHorizontalCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'three-dots-menu-horizontal-circle icon',
  ...props
}: PiThreeDotsMenuHorizontalCircleSolidProps): JSX.Element {
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
      <path d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12ZM8 10.9a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2zm4 0a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2zm4 0a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiThreeDotsMenuVerticalCircleSolid icon from the solid style in general category.
 */
interface PiThreeDotsMenuVerticalCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThreeDotsMenuVerticalCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'three-dots-menu-vertical-circle icon',
  ...props
}: PiThreeDotsMenuVerticalCircleSolidProps): React.ReactElement {
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
      <path d="M12 1.85c5.606 0 10.15 4.544 10.15 10.15 0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12 6.394 1.85 12 1.85ZM13.1 8a1.1 1.1 0 0 0-2.2 0v.01a1.1 1.1 0 0 0 2.2 0zm0 4a1.1 1.1 0 0 0-2.2 0v.01a1.1 1.1 0 0 0 2.2 0zm0 4a1.1 1.1 0 0 0-2.2 0v.01a1.1 1.1 0 0 0 2.2 0z" fill="currentColor"/>
    </svg>
  );
}

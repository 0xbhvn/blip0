import React from 'react';

/**
 * PiThreeDotsMenuVerticalCircleStroke icon from the stroke style in general category.
 */
interface PiThreeDotsMenuVerticalCircleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThreeDotsMenuVerticalCircleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'three-dots-menu-vertical-circle icon',
  ...props
}: PiThreeDotsMenuVerticalCircleStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.005 16.005v-.01m0-3.99v-.01m0-3.99v-.01M12 2.85a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3Z" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiSteeringWheelSolid icon from the solid style in automotive category.
 */
interface PiSteeringWheelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSteeringWheelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'steering-wheel icon',
  ...props
}: PiSteeringWheelSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M12 1.85c5.605 0 10.15 4.545 10.15 10.15 0 5.604-4.548 10.15-10.15 10.15-5.605 0-10.15-4.546-10.15-10.15S6.394 1.85 12 1.85ZM4.113 9.936A16.9 16.9 0 0 1 12 8c2.845 0 5.529.7 7.886 1.936a8.154 8.154 0 0 0-15.773 0ZM11 19.5a6.5 6.5 0 0 0-7.086-6.474 8.154 8.154 0 0 0 7.06 7.06q.026-.29.026-.586Zm2.026.586a8.154 8.154 0 0 0 7.06-7.06 6.5 6.5 0 0 0-7.06 7.06ZM13.1 12a1.1 1.1 0 0 0-2.2 0v.01a1.1 1.1 0 0 0 2.2 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

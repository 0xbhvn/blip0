import React from 'react';

/**
 * PiSteeringWheelStroke icon from the stroke style in automotive category.
 */
interface PiSteeringWheelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSteeringWheelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'steering-wheel icon',
  ...props
}: PiSteeringWheelStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19.5a7.5 7.5 0 0 1 9.148-7.318M12 19.5a7.5 7.5 0 0 0-9.149-7.318M12 19.5c0 .566.062 1.118.181 1.648M12 19.5c0 .566-.063 1.118-.182 1.648m.363 0a9 9 0 0 1-.363 0m.363 0a9.15 9.15 0 0 0 8.967-8.966m-9.33 8.966a9.15 9.15 0 0 1-8.967-8.966m0 0a9 9 0 0 1 0-.31m0 0A15.93 15.93 0 0 1 12 9a15.93 15.93 0 0 1 9.149 2.872m-18.299 0a9.15 9.15 0 0 1 18.299 0m0 0a9 9 0 0 1-.001.31M12 12.01V12" fill="none"/>
    </svg>
  );
}

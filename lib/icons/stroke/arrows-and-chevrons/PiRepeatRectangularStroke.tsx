import React from 'react';

/**
 * PiRepeatRectangularStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiRepeatRectangularStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRepeatRectangularStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'repeat-rectangular icon',
  ...props
}: PiRepeatRectangularStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a15.3 15.3 0 0 1 2.92 2.777c.054.065.08.144.08.223m-3 3a15.3 15.3 0 0 0 2.92-2.777A.36.36 0 0 0 21 5m0 0H11c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 7.73c-.476.934-.536 2.12-.544 4.27M6 16a15.3 15.3 0 0 0-2.92 2.777A.36.36 0 0 0 3 19m3 3a15.3 15.3 0 0 1-2.92-2.777A.36.36 0 0 1 3 19m0 0h10c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185c.476-.934.536-2.12.544-4.27" fill="none"/>
    </svg>
  );
}

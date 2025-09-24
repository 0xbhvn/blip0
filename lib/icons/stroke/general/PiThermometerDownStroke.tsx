import React from 'react';

/**
 * PiThermometerDownStroke icon from the stroke style in general category.
 */
interface PiThermometerDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThermometerDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'thermometer-down icon',
  ...props
}: PiThermometerDownStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 0v-7" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.572 10.019c-.634.846-1.37 1.61-2.19 2.275a.6.6 0 0 1-.381.135m-2.572-2.41c.635.846 1.371 1.61 2.192 2.275a.6.6 0 0 0 .38.135m0 0V6" fill="none"/>
    </svg>
  );
}

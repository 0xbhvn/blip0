import React from 'react';

/**
 * PiThermometerStroke icon from the stroke style in general category.
 */
interface PiThermometerStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThermometerStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'thermometer icon',
  ...props
}: PiThermometerStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 0v-7" fill="none"/>
    </svg>
  );
}

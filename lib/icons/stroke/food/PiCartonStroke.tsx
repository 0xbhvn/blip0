import React from 'react';

/**
 * PiCartonStroke icon from the stroke style in food category.
 */
interface PiCartonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCartonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'carton icon',
  ...props
}: PiCartonStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H7.032c-1.411 0-2.117 0-2.656-.275a2.52 2.52 0 0 1-1.101-1.1C3 19.084 3 18.378 3 16.967V10.6c0-.594 0-.89.056-1.176a3 3 0 0 1 .243-.73c.127-.262.305-.5.661-.974L6 5m3 16V9m0 12h7.968c1.411 0 2.117 0 2.656-.275a2.52 2.52 0 0 0 1.101-1.1c.275-.54.275-1.246.275-2.657V10.6c0-.594 0-.89-.056-1.176A3 3 0 0 0 20.828 9M9 9 6 5m3 4h11.828M6 5V3.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C6.76 2 7.04 2 7.6 2h8.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C18 2.76 18 3.04 18 3.6V5M6 5h12m0 0 2.04 2.72c.356.475.534.712.66.974q.074.15.128.306" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiMapPin02AreaStroke icon from the stroke style in navigation category.
 */
interface PiMapPin02AreaStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPin02AreaStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-02-area icon',
  ...props
}: PiMapPin02AreaStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0v6m-5-1.836c-2.989.562-5 1.613-5 2.816 0 1.794 4.477 3.25 10 3.25s10-1.456 10-3.25c0-1.203-2.011-2.254-5-2.816" fill="none"/>
    </svg>
  );
}

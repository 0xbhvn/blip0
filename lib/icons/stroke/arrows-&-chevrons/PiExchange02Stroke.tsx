import React from 'react';

/**
 * PiExchange02Stroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiExchange02StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchange02Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange-02 icon',
  ...props
}: PiExchange02StrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.03 5a20.6 20.6 0 0 0-3.885 3.604A.62.62 0 0 0 12 9m4.03 4a20.6 20.6 0 0 1-3.885-3.604A.62.62 0 0 1 12 9m0 0h8M7.97 11a20.6 20.6 0 0 1 3.885 3.604A.62.62 0 0 1 12 15m-4.03 4a20.6 20.6 0 0 0 3.885-3.604A.62.62 0 0 0 12 15m0 0H4" fill="none"/>
    </svg>
  );
}

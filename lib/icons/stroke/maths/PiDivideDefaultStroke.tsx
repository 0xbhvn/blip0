import React from 'react';

/**
 * PiDivideDefaultStroke icon from the stroke style in maths category.
 */
interface PiDivideDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDivideDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'divide-default icon',
  ...props
}: PiDivideDefaultStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-5.998 5.002a1.001 1.001 0 1 1-2.003 0 1.001 1.001 0 0 1 2.002 0Zm0-10.003a1.001 1.001 0 1 1-2.003 0 1.001 1.001 0 0 1 2.002 0Z" fill="none"/>
    </svg>
  );
}

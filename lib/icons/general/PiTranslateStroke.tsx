import React from 'react';

/**
 * PiTranslateStroke icon from the stroke style in general category.
 */
interface PiTranslateStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTranslateStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'translate icon',
  ...props
}: PiTranslateStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h4m0 0h4a8 8 0 0 1-4 6.93M7 5V3m0 8.93A7.96 7.96 0 0 1 3 13m4-1.07A8.04 8.04 0 0 1 4.07 9M7 11.93A7.96 7.96 0 0 0 11 13m10 8v-.063c0-.993-.105-1.977-.31-2.937M13 21v-.063c0-.993.105-1.977.31-2.937m0 0a14.1 14.1 0 0 1 2.774-5.855 1.173 1.173 0 0 1 1.832 0A14.1 14.1 0 0 1 20.69 18m-7.38 0h7.38" fill="none"/>
    </svg>
  );
}

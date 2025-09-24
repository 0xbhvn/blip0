import React from 'react';

/**
 * PiSquareDottedStroke icon from the stroke style in general category.
 */
interface PiSquareDottedStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSquareDottedStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'square-dotted icon',
  ...props
}: PiSquareDottedStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v.01m0 17.98V21m9-9.005v.01m-18-.01v.01m.457-5.308v.01m17.087-.01v.01M3.457 17.277v.01m17.087-.01v.01M17.3 3.451v.01m-10.587-.01v.01M17.3 20.531v.01m-10.587-.01v.01" fill="none"/>
    </svg>
  );
}

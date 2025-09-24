import React from 'react';

/**
 * PiUturnDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiUturnDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-down icon',
  ...props
}: PiUturnDownStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.917 15.97a20.8 20.8 0 0 0 3.679 3.885A.64.64 0 0 0 8 20m4.083-4.03a20.8 20.8 0 0 1-3.678 3.885A.64.64 0 0 1 8 20m0 0V9a5 5 0 0 1 10 0v3" fill="none"/>
    </svg>
  );
}

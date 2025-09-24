import React from 'react';

/**
 * PiSVGStroke icon from the stroke style in development category.
 */
interface PiSVGStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSVGStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'svg icon',
  ...props
}: PiSVGStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7-7H5m14 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.707-5.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Zm0 0 10.586 10.586m0-10.586a1 1 0 1 0 1.414-1.415 1 1 0 0 0-1.414 1.415Zm0 0L6.707 17.293m10.586 0a1 1 0 1 0 1.415 1.414 1 1 0 0 0-1.415-1.414Zm-10.586 0a1 1 0 1 0-1.415 1.414 1 1 0 0 0 1.415-1.414Z" fill="none"/>
    </svg>
  );
}

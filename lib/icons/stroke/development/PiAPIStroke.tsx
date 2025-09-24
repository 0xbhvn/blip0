import React from 'react';

/**
 * PiAPIStroke icon from the stroke style in development category.
 */
interface PiAPIStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAPIStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'api icon',
  ...props
}: PiAPIStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V8h2.5a2.5 2.5 0 0 1 0 5zm0 0v3m8-8v8M9 13v-1.867a3.15 3.15 0 0 0-1.98-2.925 1.4 1.4 0 0 0-1.04 0A3.15 3.15 0 0 0 4 11.133V13m5 0v3m0-3H4m0 0v3" fill="none"/>
    </svg>
  );
}

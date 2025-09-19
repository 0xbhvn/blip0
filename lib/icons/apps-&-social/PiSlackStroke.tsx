import React from 'react';

/**
 * PiSlackStroke icon from the stroke style in apps-&-social category.
 */
interface PiSlackStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSlackStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'slack icon',
  ...props
}: PiSlackStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 3.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 15.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 16a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 8.5a1.5 1.5 0 0 1-1.5 1.5H20a1 1 0 0 1-1-1v-.5a1.5 1.5 0 0 1 3 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 2A1.5 1.5 0 0 1 10 3.5V4a1 1 0 0 1-1 1h-.5a1.5 1.5 0 1 1 0-3Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 15.5A1.5 1.5 0 0 1 3.5 14H4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 1-3 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 22a1.5 1.5 0 0 1-1.5-1.5V20a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 0 3Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.5 11a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 1 1 0 3z" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiListHeartStroke icon from the stroke style in general category.
 */
interface PiListHeartStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListHeartStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-heart icon',
  ...props
}: PiListHeartStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h6m-6 6h6M4 6h16m-2.286 12.327c-.371 0-3.714-1.806-3.714-4.333 0-1.264 1.114-2.167 2.229-2.167.547 0 1.114.18 1.485.722.372-.541.929-.73 1.486-.722 1.114.016 2.229.903 2.229 2.167 0 2.527-3.343 4.333-3.715 4.333Z" fill="none"/>
    </svg>
  );
}

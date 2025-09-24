import React from 'react';

/**
 * PiSignalStroke icon from the stroke style in navigation category.
 */
interface PiSignalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSignalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'signal icon',
  ...props
}: PiSignalStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142m-14.142 0c-3.905-3.905-3.905-10.237 0-14.142" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.841 8.158a5.433 5.433 0 0 1 0 7.683m-7.682 0a5.433 5.433 0 0 1 0-7.683" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="none"/>
    </svg>
  );
}

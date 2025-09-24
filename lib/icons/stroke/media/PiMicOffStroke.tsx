import React from 'react';

/**
 * PiMicOffStroke icon from the stroke style in media category.
 */
interface PiMicOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mic-off icon',
  ...props
}: PiMicOffStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12a8 8 0 0 1-8 8m0 0v2m0-2a8 8 0 0 1-2.091-.276m-3.566-2.067L2 22m4.343-4.343A7.98 7.98 0 0 1 4 12m2.343 5.657 2.829-2.829m0 0A4 4 0 0 1 8 12V7a4 4 0 1 1 8 0v1m-6.828 6.828L16 8m6-6-6 6m-.29 5.5a4 4 0 0 1-2.21 2.21" fill="none"/>
    </svg>
  );
}

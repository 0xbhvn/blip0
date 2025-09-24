import React from 'react';

/**
 * PiDangerSkullStroke icon from the stroke style in general category.
 */
interface PiDangerSkullStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDangerSkullStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'danger-skull icon',
  ...props
}: PiDangerSkullStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.3 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.7 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10a7 7 0 0 1 14 0v4.419c0 .944-.604 1.782-1.5 2.081a2.19 2.19 0 0 0-1.5 2.081v.094A2.325 2.325 0 0 1 13.675 21h-3.35A2.325 2.325 0 0 1 8 18.675v-.094c0-.944-.604-1.782-1.5-2.081A2.19 2.19 0 0 1 5 14.419z" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiListLongStroke icon from the stroke style in general category.
 */
interface PiListLongStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListLongStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-long icon',
  ...props
}: PiListLongStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 9h16M4 14h16M4 19h8M4 4h16" fill="none"/>
    </svg>
  );
}

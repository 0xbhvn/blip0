import React from 'react';

/**
 * PiAtMarkStroke icon from the stroke style in general category.
 */
interface PiAtMarkStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAtMarkStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'at-mark icon',
  ...props
}: PiAtMarkStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v5.5a2.5 2.5 0 0 0 2.5 2.5c2.18 0 2.5-2.267 2.5-4a9 9 0 1 0-9 9c1.052 0 2.062-.18 3-.512M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="none"/>
    </svg>
  );
}

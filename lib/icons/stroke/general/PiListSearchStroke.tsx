import React from 'react';

/**
 * PiListSearchStroke icon from the stroke style in general category.
 */
interface PiListSearchStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListSearchStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-search icon',
  ...props
}: PiListSearchStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h6m-6 6h6M4 6h16m1 12.5-1.379-1.379m0 0A2.998 2.998 0 0 0 17.5 12c-1.659 0-3 1.341-3 3a2.998 2.998 0 0 0 5.121 2.121Z" fill="none"/>
    </svg>
  );
}

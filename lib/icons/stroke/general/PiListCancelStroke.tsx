import React from 'react';

/**
 * PiListCancelStroke icon from the stroke style in general category.
 */
interface PiListCancelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListCancelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-cancel icon',
  ...props
}: PiListCancelStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h6m-6 6h6M4 6h16m-5.5 11.497 2.5-2.5m0 0 2.5-2.5m-2.5 2.5-2.5-2.5m2.5 2.5 2.5 2.5" fill="none"/>
    </svg>
  );
}

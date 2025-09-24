import React from 'react';

/**
 * PiUnderlineStroke icon from the stroke style in editing category.
 */
interface PiUnderlineStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUnderlineStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'underline icon',
  ...props
}: PiUnderlineStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20H7M17 4v6.667a5 5 0 0 1-10 0V4" fill="none"/>
    </svg>
  );
}

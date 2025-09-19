import React from 'react';

/**
 * PiAlignRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiAlignRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'align-right icon',
  ...props
}: PiAlignRightStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.97 16a20.8 20.8 0 0 0 3.885-3.679.64.64 0 0 0 .145-.404m-4.03-4.084a20.8 20.8 0 0 1 3.885 3.68.64.64 0 0 1 .145.404m0 0H4M20 19V5" fill="none"/>
    </svg>
  );
}

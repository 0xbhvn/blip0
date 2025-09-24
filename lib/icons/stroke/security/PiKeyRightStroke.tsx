import React from 'react';

/**
 * PiKeyRightStroke icon from the stroke style in security category.
 */
interface PiKeyRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'key-right icon',
  ...props
}: PiKeyRightStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0h12v3m-4-3v2" fill="none"/>
    </svg>
  );
}

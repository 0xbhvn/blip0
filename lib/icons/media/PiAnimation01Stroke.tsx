import React from 'react';

/**
 * PiAnimation01Stroke icon from the stroke style in media category.
 */
interface PiAnimation01StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnimation01Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'animation-01 icon',
  ...props
}: PiAnimation01StrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.686 15.017a5.1 5.1 0 0 1-4.771 3.082m4.77-3.082a6.1 6.1 0 1 0-6.702-6.703m6.702 6.703q-.312.033-.635.033a6.1 6.1 0 0 1-6.067-6.736m0 0A5.1 5.1 0 0 0 5.9 13.086m0 0a4.102 4.102 0 0 0 1.05 8.064 4.1 4.1 0 0 0 3.964-3.05M5.9 13.084a5.1 5.1 0 0 0 5.014 5.014" fill="none"/>
    </svg>
  );
}

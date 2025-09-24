import React from 'react';

/**
 * PiHeadingH3Stroke icon from the stroke style in editing category.
 */
interface PiHeadingH3StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH3Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h3 icon',
  ...props
}: PiHeadingH3StrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h8m-8 6V6m8 12V6m6.732 8H18m.732 0a2 2 0 1 0 0-4h-1A2 2 0 0 0 16 11m2.732 3a2 2 0 1 1 0 4h-1A2 2 0 0 1 16 17" fill="none"/>
    </svg>
  );
}

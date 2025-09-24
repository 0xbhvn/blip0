import React from 'react';

/**
 * PiHeadingH6Stroke icon from the stroke style in editing category.
 */
interface PiHeadingH6StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH6Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h6 icon',
  ...props
}: PiHeadingH6StrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h8m-8 6V6m8 12V6m4 10a2 2 0 0 0 2 2h1a2 2 0 1 0 0-4h-1a2 2 0 0 0-2 2Zm0 0v-4a2 2 0 0 1 2-2h1a2 2 0 0 1 1.732 1" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiHeadingH4Stroke icon from the stroke style in editing category.
 */
interface PiHeadingH4StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH4Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h4 icon',
  ...props
}: PiHeadingH4StrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h8m-8 6V6m8 12V6m5 4-.76 3.804A1 1 0 0 0 17.22 15H21m0 0v-3m0 3v3" fill="none"/>
    </svg>
  );
}

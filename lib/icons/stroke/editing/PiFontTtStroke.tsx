import React from 'react';

/**
 * PiFontTtStroke icon from the stroke style in editing category.
 */
interface PiFontTtStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFontTtStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'font-tt icon',
  ...props
}: PiFontTtStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 19v-6m-7 6V5m4 8h6M4 5h12" fill="none"/>
    </svg>
  );
}

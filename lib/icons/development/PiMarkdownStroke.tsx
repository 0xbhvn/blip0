import React from 'react';

/**
 * PiMarkdownStroke icon from the stroke style in development category.
 */
interface PiMarkdownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMarkdownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'markdown icon',
  ...props
}: PiMarkdownStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15V9l2.5 3L11 9v6m3-1.874a10 10 0 0 0 1.704 1.77A.48.48 0 0 0 16 15m2-1.874a10 10 0 0 1-1.704 1.77A.47.47 0 0 1 16 15m0 0V9M9.4 20h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 16.96 21 15.84 21 13.6v-3.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 4 16.84 4 14.6 4H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 7.04 3 8.16 3 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 20 7.16 20 9.4 20Z" fill="none"/>
    </svg>
  );
}

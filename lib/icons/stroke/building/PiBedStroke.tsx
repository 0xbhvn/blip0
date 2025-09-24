import React from 'react';

/**
 * PiBedStroke icon from the stroke style in building category.
 */
interface PiBedStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBedStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bed icon',
  ...props
}: PiBedStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 20v-5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C4.9 11 5.6 11 7 11h10c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C21 12.9 21 13.6 21 15v5" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11V9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 6 7.08 6 8.2 6h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 7.52 19 8.08 19 9.2V11" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 18h18" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v5" fill="none"/>
    </svg>
  );
}

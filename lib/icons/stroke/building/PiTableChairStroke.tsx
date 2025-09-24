import React from 'react';

/**
 * PiTableChairStroke icon from the stroke style in building category.
 */
interface PiTableChairStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTableChairStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'table-chair icon',
  ...props
}: PiTableChairStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-6.043m0 0V5m0 7.957h3a2 2 0 0 1 2 2V19" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 19v-6.043m0 0V5m0 7.957h-3a2 2 0 0 0-2 2V19" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V9m0 0H7m5 0h5" fill="none"/>
    </svg>
  );
}

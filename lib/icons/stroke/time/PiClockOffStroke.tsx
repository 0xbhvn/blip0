import React from 'react';

/**
 * PiClockOffStroke icon from the stroke style in time category.
 */
interface PiClockOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiClockOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'clock-off icon',
  ...props
}: PiClockOffStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 0 6.47-6.47M12 12l-6.47 6.47M22 2l-3.53 3.53m0 0A9.15 9.15 0 0 0 5.53 18.47m0 0L2 22m7.005-1.351A9.15 9.15 0 0 0 20.648 9.005m-5.86 5.86L15 15" fill="none"/>
    </svg>
  );
}

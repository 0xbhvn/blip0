import React from 'react';

/**
 * PiClockOffSolid icon from the solid style in time category.
 */
interface PiClockOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiClockOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'clock-off icon',
  ...props
}: PiClockOffSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fillRule="evenodd" d="M22.707 2.707a1 1 0 0 0-1.414-1.414L18.435 4.15A10.1 10.1 0 0 0 12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 2.442.864 4.684 2.3 6.435l-2.857 2.858a1 1 0 1 0 1.414 1.414zM13 9.586V8a1 1 0 1 0-2 0v3.586z" clipRule="evenodd" fill="currentColor"/><path d="M8.298 19.942 13.2 15.04l1.263.804a1 1 0 0 0 1.074-1.688l-.888-.565 5.293-5.293a1 1 0 0 1 1.652.38c.36 1.042.556 2.16.556 3.322 0 5.606-4.544 10.15-10.15 10.15-1.162 0-2.28-.196-3.322-.556a1 1 0 0 1-.38-1.652Z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiMagneticCompassStroke icon from the stroke style in navigation category.
 */
interface PiMagneticCompassStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMagneticCompassStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'magnetic-compass icon',
  ...props
}: PiMagneticCompassStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.587 15.498a6.33 6.33 0 0 0 5.91-5.91 1.02 1.02 0 0 0-1.085-1.086 6.33 6.33 0 0 0-5.91 5.91c-.04.616.47 1.125 1.085 1.086Z" fill="none"/>
    </svg>
  );
}

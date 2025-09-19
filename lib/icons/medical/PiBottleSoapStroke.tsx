import React from 'react';

/**
 * PiBottleSoapStroke icon from the stroke style in medical category.
 */
interface PiBottleSoapStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBottleSoapStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bottle-soap icon',
  ...props
}: PiBottleSoapStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 11a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20.5z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 8V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 2h6.919c.944 0 1.782.604 2.081 1.5" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 14.492c5.752-2.055 6 3.094 12 1.486" fill="none"/>
    </svg>
  );
}

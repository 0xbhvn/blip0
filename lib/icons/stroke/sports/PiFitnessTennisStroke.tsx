import React from 'react';

/**
 * PiFitnessTennisStroke icon from the stroke style in sports category.
 */
interface PiFitnessTennisStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFitnessTennisStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fitness-tennis icon',
  ...props
}: PiFitnessTennisStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M12 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 6c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2c.829 0 1.5.895 1.5 2s-.67 2-1.5 2Zm0 0v5" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15.5 22-1.37-4.565a1 1 0 0 0-.544-.623l-3.37-1.532a2 2 0 0 1-1.04-2.539L11 8H8.472a4 4 0 0 0-3.578 2.211L4 12" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7.5 17-.906 1.812a5 5 0 0 1-1.699 1.924L3 22" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 9.5.406.61a2 2 0 0 0 1.664.89H19" fill="none"/>
    </svg>
  );
}

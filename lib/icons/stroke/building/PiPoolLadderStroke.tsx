import React from 'react';

/**
 * PiPoolLadderStroke icon from the stroke style in building category.
 */
interface PiPoolLadderStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPoolLadderStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pool-ladder icon',
  ...props
}: PiPoolLadderStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 20.415 2.55-1.02c1.55-.62 3.3-.503 4.756.313 1.675.94 3.723.94 5.397 0a5.5 5.5 0 0 1 4.744-.314L22 20.414" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18.972V6a2 2 0 1 1 4 0v.2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 19.159V6a2 2 0 1 1 4 0v.2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10h10" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15h10" fill="none"/>
    </svg>
  );
}

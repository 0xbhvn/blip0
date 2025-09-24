import React from 'react';

/**
 * PiBalanceScaleLawStroke icon from the stroke style in general category.
 */
interface PiBalanceScaleLawStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBalanceScaleLawStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'balance-scale-law icon',
  ...props
}: PiBalanceScaleLawStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v1.75M16 21h-4m-4 0h4m9-16a4.82 4.82 0 0 1-4.055.12l-1.583-.68A8.5 8.5 0 0 0 12 3.75M3 5a4.82 4.82 0 0 0 4.055.12l1.583-.68A8.5 8.5 0 0 1 12 3.75M12 21V3.75m7 1.75-2.891 6.145a3.196 3.196 0 1 0 5.783 0zm-14 0-2.89 6.145a3.196 3.196 0 1 0 5.783 0z" fill="none"/>
    </svg>
  );
}

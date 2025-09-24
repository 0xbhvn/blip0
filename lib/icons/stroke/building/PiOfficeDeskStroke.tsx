import React from 'react';

/**
 * PiOfficeDeskStroke icon from the stroke style in building category.
 */
interface PiOfficeDeskStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiOfficeDeskStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'office-desk icon',
  ...props
}: PiOfficeDeskStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 5v10.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C13 17.48 13 16.92 13 15.8V9m8-4h-8m8 0h1M3 5h10M3 5H2m1 0v4m10-4v4M3 19V9m0 0h10" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 9h2" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 13h2" fill="none"/>
    </svg>
  );
}

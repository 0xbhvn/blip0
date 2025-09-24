import React from 'react';

/**
 * PiFaceAnnoyedBoredSolid icon from the solid style in general category.
 */
interface PiFaceAnnoyedBoredSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceAnnoyedBoredSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'face-annoyed-bored icon',
  ...props
}: PiFaceAnnoyedBoredSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12ZM8 8.9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-6 5.2a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

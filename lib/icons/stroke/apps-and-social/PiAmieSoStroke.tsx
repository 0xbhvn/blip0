import React from 'react';

/**
 * PiAmieSoStroke icon from the stroke style in apps-&-social category.
 */
interface PiAmieSoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAmieSoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'amie-so icon',
  ...props
}: PiAmieSoStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.21 21c1.494 0 2.84-.628 3.79-1.634A5.21 5.21 0 1 0 19.366 12 5.21 5.21 0 1 0 12 4.634 5.21 5.21 0 1 0 4.634 12a5.21 5.21 0 0 0 3.576 9Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 14v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0Z" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiFaceEvilSmileStroke icon from the stroke style in general category.
 */
interface PiFaceEvilSmileStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceEvilSmileStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'face-evil-smile icon',
  ...props
}: PiFaceEvilSmileStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.386 9.144 1.229.86m4.77 0 1.23-.86m-.044 5.355A5 5 0 0 1 12 16a5 5 0 0 1-3.57-1.5M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3Z" fill="none"/>
    </svg>
  );
}

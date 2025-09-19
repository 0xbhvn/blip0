import React from 'react';

/**
 * PiEncryptedLockStroke icon from the stroke style in security category.
 */
interface PiEncryptedLockStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEncryptedLockStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'encrypted-lock icon',
  ...props
}: PiEncryptedLockStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 9V7a4 4 0 0 0-8 0v2m-3 4h8m-8 4h6m-6 4h4m7-8h3m-5 4h5m-7 4h7" fill="none"/>
    </svg>
  );
}

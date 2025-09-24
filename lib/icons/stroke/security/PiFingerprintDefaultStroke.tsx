import React from 'react';

/**
 * PiFingerprintDefaultStroke icon from the stroke style in security category.
 */
interface PiFingerprintDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFingerprintDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fingerprint-default icon',
  ...props
}: PiFingerprintDefaultStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13v-2.5M12 21v-4M9.354 8A4 4 0 0 1 16 11v9.25M8 12v8.25m7-16.668A8 8 0 0 0 4 11v6.55M18.615 6.5A7.96 7.96 0 0 1 20 11v6.55" fill="none"/>
    </svg>
  );
}

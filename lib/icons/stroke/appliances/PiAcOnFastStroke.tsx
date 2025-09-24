import React from 'react';

/**
 * PiAcOnFastStroke icon from the stroke style in appliances category.
 */
interface PiAcOnFastStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcOnFastStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-on-fast icon',
  ...props
}: PiAcOnFastStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8h-2m-4 7v5m5-5v.146A5.43 5.43 0 0 0 20 20M7 15v.146A5.43 5.43 0 0 1 4 20m18-8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6z" fill="none"/>
    </svg>
  );
}

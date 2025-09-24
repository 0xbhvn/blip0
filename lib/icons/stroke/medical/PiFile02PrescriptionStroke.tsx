import React from 'react';

/**
 * PiFile02PrescriptionStroke icon from the stroke style in medical category.
 */
interface PiFile02PrescriptionStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02PrescriptionStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-prescription icon',
  ...props
}: PiFile02PrescriptionStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 11a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3M8 13v-3h3a1.5 1.5 0 0 1 0 3h-1m-2 0v3m0-3h2m2 6 2-2m0 0 2-2m-2 2 2 2m-2-2-4-4m10-3v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8Z" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiPrescriptionRxStroke icon from the stroke style in medical category.
 */
interface PiPrescriptionRxStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPrescriptionRxStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'prescription-rx icon',
  ...props
}: PiPrescriptionRxStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.003 9V3h6a3 3 0 1 1 0 6h-2m-4 0v6m0-6h4m4 12 4-4m0 0 4-4m-4 4 4 4m-4-4-8-8" fill="none"/>
    </svg>
  );
}

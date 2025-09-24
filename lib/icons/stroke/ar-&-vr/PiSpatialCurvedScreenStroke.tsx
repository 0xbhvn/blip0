import React from 'react';

/**
 * PiSpatialCurvedScreenStroke icon from the stroke style in ar-&-vr category.
 */
interface PiSpatialCurvedScreenStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpatialCurvedScreenStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'spatial-curved-screen icon',
  ...props
}: PiSpatialCurvedScreenStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 20.997h-5m-2.99 0H8M2 4.393v-.09a1 1 0 0 1 1.338-.905c.326.098.489.146.649.192a29 29 0 0 0 16.026 0c.16-.046.323-.094.649-.192l.086-.025a1 1 0 0 1 1.251.93l.001.09V16.69a1 1 0 0 1-1.252.931l-.086-.025a29 29 0 0 0-16.675-.193c-.16.046-.323.095-.649.193l-.086.025a1 1 0 0 1-1.251-.93L2 16.6z" fill="none"/>
    </svg>
  );
}

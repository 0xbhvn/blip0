import React from 'react';

/**
 * PiCloudDisabledStroke icon from the stroke style in development category.
 */
interface PiCloudDisabledStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudDisabledStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-disabled icon',
  ...props
}: PiCloudDisabledStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.702 20H16.5a5.5 5.5 0 0 0 3.186-9.984M6.466 9.08v-.002l.045-.108a6.502 6.502 0 0 1 10.585-2.066M6.466 9.08A6.5 6.5 0 0 0 6.174 13m.29-3.92c-.322.803-.483 1.204-.561 1.325-.152.235-.038.1-.244.29-.106.097-.579.39-1.525.976a4.5 4.5 0 0 0 .344 7.85M17.096 6.904 4.48 19.522M17.096 6.903 20 4M2 22l2.479-2.479" fill="none"/>
    </svg>
  );
}

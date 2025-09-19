import React from 'react';

/**
 * PiCloudSnowStroke icon from the stroke style in weather category.
 */
interface PiCloudSnowStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudSnowStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-snow icon',
  ...props
}: PiCloudSnowStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.017 9.026A7 7 0 0 0 6 9.5m.017-.474a4.5 4.5 0 0 0-1.706 8.407m1.706-8.407a6.5 6.5 0 0 1 12.651-1.582 5.501 5.501 0 0 1 .652 9.779M8 15v.01m4 .99v.01M16 15v.01M8 19v.01m4 .99v.01M16 19v.01" fill="none"/>
    </svg>
  );
}

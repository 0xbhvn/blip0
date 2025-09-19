import React from 'react';

/**
 * PiCloudLightningStroke icon from the stroke style in weather category.
 */
interface PiCloudLightningStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudLightningStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-lightning icon',
  ...props
}: PiCloudLightningStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.06 11 10 15.5c-.201.272-.01.623.374.685l4.09.664c.38.061.573.408.377.68L11.365 22M6.017 9.026A6.6 6.6 0 0 0 6.174 11m-.157-1.974A4.5 4.5 0 0 0 6.5 18h.05m-.533-8.974a6.5 6.5 0 0 1 12.651-1.582A5.5 5.5 0 0 1 22 12.5c0 2.07-1.21 4.033-3.076 4.937" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiAirbnbStroke icon from the stroke style in apps-&-social category.
 */
interface PiAirbnbStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirbnbStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'airbnb icon',
  ...props
}: PiAirbnbStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 17.857-1.985 1.985a3.953 3.953 0 0 1-6.373-4.478l3.143-6.683c1.35-2.868 2.024-4.303 2.843-4.904a4 4 0 0 1 4.736-.001c.818.601 1.494 2.035 2.844 4.903l3.148 6.685a3.952 3.952 0 0 1-6.37 4.479zm0 0 2.05-2.05c1.827-1.827.533-4.95-2.05-4.95s-3.877 3.123-2.05 4.95z" fill="none"/>
    </svg>
  );
}

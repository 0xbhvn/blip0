import React from 'react';

/**
 * PiLabFlaskRoundSolid icon from the solid style in general category.
 */
interface PiLabFlaskRoundSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLabFlaskRoundSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'lab-flask-round icon',
  ...props
}: PiLabFlaskRoundSolidProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2v2.128c0 .198.145.464.484.617A8.5 8.5 0 0 1 12 23 8.5 8.5 0 0 1 8.516 6.745c.34-.153.484-.42.484-.617V4a1 1 0 0 1-1-1Zm3 1v2.128c0 1.15-.771 2.04-1.663 2.44a6.53 6.53 0 0 0-3.27 3.27c1.215-.326 2.314-.378 3.33-.24 1.506.203 2.756.812 3.83 1.384l.509.274c.885.479 1.623.877 2.413 1.092.77.222 1.59.2 2.348-.063a6.5 6.5 0 0 0-3.834-5.716C13.77 8.167 13 7.279 13 6.128V4zM9 15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

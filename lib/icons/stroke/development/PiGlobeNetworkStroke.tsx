import React from 'react';

/**
 * PiGlobeNetworkStroke icon from the stroke style in development category.
 */
interface PiGlobeNetworkStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGlobeNetworkStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'globe-network icon',
  ...props
}: PiGlobeNetworkStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10.087 3.052a9 9 0 0 0-1.375.408m1.375-.408a14.46 14.46 0 0 1 2.404 7.467m-2.404-7.467a9.2 9.2 0 0 1 1.951-.2m-3.326.608a9.18 9.18 0 0 0-5.044 4.753M8.712 3.46a10.6 10.6 0 0 1-.192 6.92m3.518-7.528A9.14 9.14 0 0 1 19.63 6.95m-7.592-4.1a17.5 17.5 0 0 1 3.775 6.746M19.63 6.95a12.2 12.2 0 0 1-3.817 2.646M19.63 6.95a9.2 9.2 0 0 1 1.516 5.303m0 0a9.15 9.15 0 0 1-5.632 8.198m5.632-8.198a17.7 17.7 0 0 1-4.619 2.408m-1.013 5.79a17.5 17.5 0 0 0 1.013-5.79m-1.013 5.79a9.22 9.22 0 0 1-6.585.172m0 0a9.18 9.18 0 0 1-5.215-4.735m5.215 4.735a14.5 14.5 0 0 0 2.855-5.023m-8.07.288a9 9 0 0 1-.669-1.995m.67 1.995A10.6 10.6 0 0 0 5.33 14.8m-2.286-.906q1.105.53 2.286.906m-2.286-.906a9.2 9.2 0 0 1 .623-5.68m0 0A12.1 12.1 0 0 0 8.52 10.38m3.97.14a12 12 0 0 0 3.323-.923m-3.322.922a12.3 12.3 0 0 1-3.971-.139m3.97.14a14.6 14.6 0 0 1-.706 5.081m4.03-6.004c.473 1.605.723 3.31.713 5.065M8.52 10.38a10.56 10.56 0 0 1-3.19 4.42m6.454.801a17.7 17.7 0 0 0 4.743-.939m-4.743.94A17.9 17.9 0 0 1 5.33 14.8" fill="none"/>
    </svg>
  );
}

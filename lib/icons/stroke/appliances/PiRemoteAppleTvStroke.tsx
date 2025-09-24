import React from 'react';

/**
 * PiRemoteAppleTvStroke icon from the stroke style in appliances category.
 */
interface PiRemoteAppleTvStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRemoteAppleTvStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'remote-apple-tv icon',
  ...props
}: PiRemoteAppleTvStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 2H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 15v3m0-6v.01M10 12v.01M10 15v.01M10 18v.01" fill="none"/>
    </svg>
  );
}

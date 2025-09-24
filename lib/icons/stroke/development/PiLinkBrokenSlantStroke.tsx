import React from 'react';

/**
 * PiLinkBrokenSlantStroke icon from the stroke style in development category.
 */
interface PiLinkBrokenSlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkBrokenSlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-broken-slant icon',
  ...props
}: PiLinkBrokenSlantStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.911 7.422h-3M7.74 4.593v-3m8.4 17.057v3m2.828-5.829h3M5.447 10.957l-.707.707a5 5 0 0 0 7.07 7.071l.708-.707m-2.122-12.02.707-.708a5 5 0 0 1 7.072 7.071l-.707.707" fill="none"/>
    </svg>
  );
}

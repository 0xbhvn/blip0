import React from 'react';

/**
 * PiLinkSlantStroke icon from the stroke style in development category.
 */
interface PiLinkSlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkSlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-slant icon',
  ...props
}: PiLinkSlantStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.121 9.878-4.243 4.243m.708-7.778.707-.707a5 5 0 0 1 7.07 7.07l-.706.708M6.343 10.586l-.707.707a5 5 0 0 0 7.07 7.07l.708-.706" fill="none"/>
    </svg>
  );
}

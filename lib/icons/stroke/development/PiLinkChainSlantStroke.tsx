import React from 'react';

/**
 * PiLinkChainSlantStroke icon from the stroke style in development category.
 */
interface PiLinkChainSlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkChainSlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-chain-slant icon',
  ...props
}: PiLinkChainSlantStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.05 11.364a4.99 4.99 0 0 0-4.88-2.192 4.98 4.98 0 0 0-2.827 1.414L4.929 12a5 5 0 0 0 7.07 7.071l.708-.707m-2.758-5.728q.274.414.637.778a5 5 0 0 0 4.243 1.415 4.98 4.98 0 0 0 2.828-1.415L19.07 12A5 5 0 0 0 12 4.929l-.707.707" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiExternalLinkCircleStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiExternalLinkCircleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExternalLinkCircleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'external-link-circle icon',
  ...props
}: PiExternalLinkCircleStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.974 13.5A7.11 7.11 0 0 1 12.89 20H12a8 8 0 0 1-8-8v-.889a7.11 7.11 0 0 1 6.5-7.085m9.26 5.429c.262-1.633.31-3.285.142-4.914a.5.5 0 0 0-.142-.3m0 0a.5.5 0 0 0-.301-.143 18.8 18.8 0 0 0-4.913.142m5.214 0L10 14" fill="none"/>
    </svg>
  );
}

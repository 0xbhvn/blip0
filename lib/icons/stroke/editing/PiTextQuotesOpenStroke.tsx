import React from 'react';

/**
 * PiTextQuotesOpenStroke icon from the stroke style in editing category.
 */
interface PiTextQuotesOpenStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextQuotesOpenStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'text-quotes-open icon',
  ...props
}: PiTextQuotesOpenStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm0 0A9.4 9.4 0 0 1 18 6.3M4 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm0 0A9.4 9.4 0 0 1 8 6.3" fill="none"/>
    </svg>
  );
}

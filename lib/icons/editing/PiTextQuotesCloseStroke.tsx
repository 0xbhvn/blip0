import React from 'react';

/**
 * PiTextQuotesCloseStroke icon from the stroke style in editing category.
 */
interface PiTextQuotesCloseStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextQuotesCloseStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'text-quotes-close icon',
  ...props
}: PiTextQuotesCloseStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0a9.4 9.4 0 0 1-4 7.698M20 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0a9.4 9.4 0 0 1-4 7.698" fill="none"/>
    </svg>
  );
}

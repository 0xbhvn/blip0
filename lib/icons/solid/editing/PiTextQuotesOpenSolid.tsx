import React from 'react';

/**
 * PiTextQuotesOpenSolid icon from the solid style in editing category.
 */
interface PiTextQuotesOpenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextQuotesOpenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'text-quotes-open icon',
  ...props
}: PiTextQuotesOpenSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M18.575 7.118a8.45 8.45 0 0 0-2.64 3.023Q16.445 10 17 9.998a4 4 0 1 1-4 4c0-3.522 1.75-6.635 4.424-8.516a1 1 0 1 1 1.151 1.636Zm-10 0a8.45 8.45 0 0 0-2.64 3.023Q6.445 10 7 9.998a4 4 0 1 1-4 4c0-3.522 1.75-6.635 4.425-8.516a1 1 0 1 1 1.15 1.636Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

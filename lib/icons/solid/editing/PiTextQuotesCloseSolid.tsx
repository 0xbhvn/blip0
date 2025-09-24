import React from 'react';

/**
 * PiTextQuotesCloseSolid icon from the solid style in editing category.
 */
interface PiTextQuotesCloseSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextQuotesCloseSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'text-quotes-close icon',
  ...props
}: PiTextQuotesCloseSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M5.425 16.88a8.45 8.45 0 0 0 2.64-3.023Q7.555 13.998 7 14a4 4 0 1 1 4-4c0 3.521-1.75 6.634-4.424 8.516a1 1 0 0 1-1.151-1.636Zm10 0a8.45 8.45 0 0 0 2.64-3.023q-.51.141-1.065.143a4 4 0 1 1 4-4c0 3.521-1.75 6.634-4.424 8.516a1 1 0 1 1-1.151-1.636Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

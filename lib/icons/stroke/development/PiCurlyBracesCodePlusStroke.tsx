import React from 'react';

/**
 * PiCurlyBracesCodePlusStroke icon from the stroke style in development category.
 */
interface PiCurlyBracesCodePlusStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurlyBracesCodePlusStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'curly-braces-code-plus icon',
  ...props
}: PiCurlyBracesCodePlusStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v-3m0 0V9m0 3H9m3 0h3M8 4C6.343 4 5 5.194 5 6.667v2.666C5 10.806 3.657 12 2 12c1.657 0 3 1.194 3 2.667v2.666C5 18.806 6.343 20 8 20m8-16c1.657 0 3 1.194 3 2.667v2.666C19 10.806 20.343 12 22 12c-1.657 0-3 1.194-3 2.667v2.666C19 18.806 17.657 20 16 20" fill="none"/>
    </svg>
  );
}

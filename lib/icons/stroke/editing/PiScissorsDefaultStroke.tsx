import React from 'react';

/**
 * PiScissorsDefaultStroke icon from the stroke style in editing category.
 */
interface PiScissorsDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScissorsDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'scissors-default icon',
  ...props
}: PiScissorsDefaultStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.4 3 12 11.4m0 0L3.6 3m8.4 8.4 3.454 3.454M12 11.399l-3.455 3.455m6.91 0a3.6 3.6 0 1 0 5.09 5.091 3.6 3.6 0 0 0-5.09-5.091Zm-6.91 0a3.6 3.6 0 1 0-5.091 5.09 3.6 3.6 0 0 0 5.091-5.09Z" fill="none"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiScissorsRightStroke icon from the stroke style in editing category.
 */
interface PiScissorsRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScissorsRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'scissors-right icon',
  ...props
}: PiScissorsRightStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 20.4 12.6 12m0 0L21 3.6M12.6 12l-3.454 3.455M12.6 12 9.146 8.545m0 6.91a3.6 3.6 0 1 0-5.091 5.091 3.6 3.6 0 0 0 5.09-5.091Zm0-6.91a3.6 3.6 0 1 0-5.091-5.09 3.6 3.6 0 0 0 5.09 5.09Z" fill="none"/>
    </svg>
  );
}

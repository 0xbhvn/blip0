import React from 'react';

/**
 * PiCommandCmdStroke icon from the stroke style in editing category.
 */
interface PiCommandCmdStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCommandCmdStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'command-cmd icon',
  ...props
}: PiCommandCmdStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.333 14.667H6.667a2.667 2.667 0 1 0 2.666 2.666zm0 0h5.334m-5.334 0V9.333m5.334 5.334h2.666a2.667 2.667 0 1 1-2.666 2.666zm0 0V9.333m0 0V6.667a2.667 2.667 0 1 1 2.666 2.666zm0 0H9.333m0 0H6.667a2.667 2.667 0 1 1 2.666-2.666z" fill="none"/>
    </svg>
  );
}

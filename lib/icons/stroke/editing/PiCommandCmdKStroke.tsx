import React from 'react';

/**
 * PiCommandCmdKStroke icon from the stroke style in editing category.
 */
interface PiCommandCmdKStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCommandCmdKStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'command-cmd-k icon',
  ...props
}: PiCommandCmdKStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.667 13.833H2.833a1.833 1.833 0 1 0 1.834 1.834zm0 0h3.666m-3.666 0v-3.666m3.666 3.666h1.834a1.833 1.833 0 1 1-1.834 1.834zm0 0v-3.666m0 0V8.333a1.833 1.833 0 1 1 1.834 1.834zm0 0H4.667m0 0H2.833a1.833 1.833 0 1 1 1.834-1.834zM16 6.5V14m0 0v3.5m0-3.5 2.041-2.041m0 0L22.922 6.5m-4.88 5.459a8.86 8.86 0 0 1 4.84 5.201l.118.34" fill="none"/>
    </svg>
  );
}

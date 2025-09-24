import React from 'react';

/**
 * PiCommandCmdCircleSolid icon from the solid style in editing category.
 */
interface PiCommandCmdCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCommandCmdCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'command-cmd-circle icon',
  ...props
}: PiCommandCmdCircleSolidProps): JSX.Element {
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
      <path d="M8 8.667a.667.667 0 0 1 1.333 0v.666h-.666A.667.667 0 0 1 8 8.667Z" fill="currentColor"/><path d="M11.334 12.667v-1.334h1.333v1.334z" fill="currentColor"/><path d="M15.334 9.333h-.667v-.666a.667.667 0 1 1 .667.666Z" fill="currentColor"/><path d="M14.667 15.333v-.666h.667a.667.667 0 1 1-.667.666Z" fill="currentColor"/><path d="M8.667 14.667h.666v.666a.667.667 0 1 1-.666-.666Z" fill="currentColor"/><path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12Zm9.484-3.333v.666h1.333v-.666a2.667 2.667 0 1 1 2.667 2.666h-.667v1.334h.667a2.667 2.667 0 1 1-2.667 2.666v-.666h-1.333v.666a2.667 2.667 0 1 1-2.667-2.666h.666v-1.334h-.666a2.667 2.667 0 1 1 2.667-2.666Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiTerminalConsoleCircleSolid icon from the solid style in development category.
 */
interface PiTerminalConsoleCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTerminalConsoleCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'terminal-console-circle icon',
  ...props
}: PiTerminalConsoleCircleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm6.707-3.707a1 1 0 0 0-1.414 1.414L8.586 11l-1.293 1.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414zM13 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

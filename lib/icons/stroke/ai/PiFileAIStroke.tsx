import React from 'react';

/**
 * PiFileAIStroke icon from the stroke style in ai category.
 */
interface PiFileAIStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFileAIStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-ai icon',
  ...props
}: PiFileAIStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.534 16.812h.01m3.99-7c-.638 1.617-1.34 2.345-3 3 1.66.655 2.362 1.384 3 3 .637-1.616 1.339-2.345 3-3-1.661-.655-2.363-1.383-3-3Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.534 1.87v1.142c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311c.643.327 1.483.327 3.163.327h1.142M13.534 1.87c-.394-.058-.864-.058-1.651-.058h-1.95c-2.24 0-3.36 0-4.215.436A4 4 0 0 0 3.97 3.996c-.436.856-.436 1.976-.436 4.216v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.855.436 1.975.436 4.216.436h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.436-.855.436-1.976.436-4.216V9.463c0-.787 0-1.257-.058-1.65M13.534 1.87q.142.02.277.053a4 4 0 0 1 1.156.479c.403.247.75.593 1.441 1.285l1.251 1.25c.692.692 1.038 1.038 1.285 1.442a4 4 0 0 1 .48 1.156q.03.134.052.277" fill="none"/>
    </svg>
  );
}

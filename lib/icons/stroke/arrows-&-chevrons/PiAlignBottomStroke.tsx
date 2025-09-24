import React from 'react';

/**
 * PiAlignBottomStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiAlignBottomStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignBottomStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'align-bottom icon',
  ...props
}: PiAlignBottomStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.917 11.97a20.8 20.8 0 0 0 3.678 3.885A.64.64 0 0 0 12 16m4.083-4.03a20.8 20.8 0 0 1-3.678 3.885A.64.64 0 0 1 12 16m0 0V4M5 20h14" fill="none"/>
    </svg>
  );
}

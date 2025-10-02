import React from 'react';

/**
 * PiMergeStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiMergeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMergeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'merge icon',
  ...props
}: PiMergeStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8.03a20.6 20.6 0 0 0-3.604-3.885A.62.62 0 0 0 12 4M8 8.03a20.6 20.6 0 0 1 3.604-3.885A.62.62 0 0 1 12 4m0 0v9l-6 7m12 0-3.429-4" fill="none"/>
    </svg>
  );
}

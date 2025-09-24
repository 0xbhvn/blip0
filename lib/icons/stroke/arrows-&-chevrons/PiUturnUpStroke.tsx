import React from 'react';

/**
 * PiUturnUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiUturnUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-up icon',
  ...props
}: PiUturnUpStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.083 8.03a20.8 20.8 0 0 0-3.678-3.885A.64.64 0 0 0 16 4m-4.083 4.03a20.8 20.8 0 0 1 3.678-3.885A.64.64 0 0 1 16 4m0 0v11a5 5 0 0 1-10 0v-3" fill="none"/>
    </svg>
  );
}

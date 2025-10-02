import React from 'react';

/**
 * PiArrowLeftUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowLeftUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-up icon',
  ...props
}: PiArrowLeftUpStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.229 5.743a30.2 30.2 0 0 0-7.797-.152.95.95 0 0 0-.569.272m-.12 8.366a30.2 30.2 0 0 1-.152-7.797.95.95 0 0 1 .272-.569m0 0 12.728 12.728" fill="none"/>
    </svg>
  );
}

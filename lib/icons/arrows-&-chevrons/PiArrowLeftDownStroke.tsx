import React from 'react';

/**
 * PiArrowLeftDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowLeftDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-down icon',
  ...props
}: PiArrowLeftDownStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.516 9.999a30.2 30.2 0 0 0-.152 7.797.94.94 0 0 0 .272.568m8.365.12a30.2 30.2 0 0 1-7.797.152.95.95 0 0 1-.568-.272m0 0L18.364 5.636" fill="none"/>
    </svg>
  );
}

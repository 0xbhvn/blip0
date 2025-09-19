import React from 'react';

/**
 * PiArrowRightDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowRightDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-down icon',
  ...props
}: PiArrowRightDownStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.999 18.484a30.2 30.2 0 0 0 7.797.152.95.95 0 0 0 .568-.272m.12-8.365a30.2 30.2 0 0 1 .152 7.797.95.95 0 0 1-.272.568m0 0L5.636 5.636" fill="none"/>
    </svg>
  );
}

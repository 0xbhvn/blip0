import React from 'react';

/**
 * PiAlignBottomSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiAlignBottomSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignBottomSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'align-bottom icon',
  ...props
}: PiAlignBottomSolidProps): JSX.Element {
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
      <path d="M13 4a1 1 0 1 0-2 0v7.124a50 50 0 0 1-3.003-.152 1 1 0 0 0-.886 1.59 21.8 21.8 0 0 0 3.853 4.069 1.64 1.64 0 0 0 2.072 0 21.8 21.8 0 0 0 3.853-4.069 1 1 0 0 0-.886-1.59q-1.5.122-3.003.152z" fill="currentColor"/><path d="M5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiAlignVerticalCenterSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiAlignVerticalCenterSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignVerticalCenterSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'align-vertical-center icon',
  ...props
}: PiAlignVerticalCenterSolidProps): JSX.Element {
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
      <path d="M5 11a1 1 0 1 0 0 2h7c-.364 0-.707.14-.97.38a17.4 17.4 0 0 0-2.864 3.384 1 1 0 0 0 .932 1.547A30 30 0 0 1 11 18.185V21a1 1 0 1 0 2 0v-2.815q.953.033 1.902.126a1 1 0 0 0 .932-1.547 17.4 17.4 0 0 0-2.863-3.384A1.44 1.44 0 0 0 12 13h7a1 1 0 1 0 0-2h-7c.364 0 .707-.14.97-.38a17.4 17.4 0 0 0 2.864-3.384 1 1 0 0 0-.932-1.547q-.95.093-1.902.126V3a1 1 0 1 0-2 0v2.815a30 30 0 0 1-1.902-.126 1 1 0 0 0-.932 1.547 17.4 17.4 0 0 0 2.863 3.384c.264.24.607.38.971.38z" fill="currentColor"/>
    </svg>
  );
}

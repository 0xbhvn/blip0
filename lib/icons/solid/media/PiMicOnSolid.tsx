import React from 'react';

/**
 * PiMicOnSolid icon from the solid style in media category.
 */
interface PiMicOnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicOnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mic-on icon',
  ...props
}: PiMicOnSolidProps): JSX.Element {
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
      <path d="M12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" fill="currentColor"/><path d="M5 12a1 1 0 1 0-2 0 9 9 0 0 0 8 8.945V22a1 1 0 1 0 2 0v-1.055A9 9 0 0 0 21 12a1 1 0 1 0-2 0 7 7 0 1 1-14 0Z" fill="currentColor"/>
    </svg>
  );
}

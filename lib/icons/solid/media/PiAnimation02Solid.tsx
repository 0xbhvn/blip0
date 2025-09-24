import React from 'react';

/**
 * PiAnimation02Solid icon from the solid style in media category.
 */
interface PiAnimation02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnimation02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'animation-02 icon',
  ...props
}: PiAnimation02SolidProps): React.ReactElement {
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
      <path d="M19 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="currentColor"/><path d="M12.655 10.73a1 1 0 1 0-.837-1.816 10.03 10.03 0 0 0-5.356 6.074A6 6 0 0 0 2 13a1 1 0 1 0 0 2 4 4 0 0 1 4 4 1 1 0 1 0 2 0v-1a8 8 0 0 1 4.655-7.27Z" fill="currentColor"/>
    </svg>
  );
}

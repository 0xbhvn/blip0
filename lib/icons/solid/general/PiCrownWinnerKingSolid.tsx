import React from 'react';

/**
 * PiCrownWinnerKingSolid icon from the solid style in general category.
 */
interface PiCrownWinnerKingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCrownWinnerKingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'crown-winner-king icon',
  ...props
}: PiCrownWinnerKingSolidProps): JSX.Element {
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
      <path d="M13.3 2.38c-.47-1.173-2.13-1.173-2.6 0l-.764 1.912C8.86 6.981 5.386 7.694 3.339 5.646 2.18 4.49.23 5.57.599 7.165l2.485 10.767a1 1 0 0 0 1.326.712 21.62 21.62 0 0 1 15.18 0 1 1 0 0 0 1.326-.712l2.485-10.767c.368-1.595-1.582-2.676-2.74-1.519-2.047 2.048-5.521 1.335-6.597-1.354z" fill="currentColor"/><path d="M19.58 20.564a21.6 21.6 0 0 0-15.16 0 1 1 0 1 0 .702 1.872 19.6 19.6 0 0 1 13.756 0 1 1 0 0 0 .703-1.872Z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiTrophySolid icon from the solid style in sports category.
 */
interface PiTrophySolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrophySolid({
  size = 24,
  color,
  className,
  ariaLabel = 'trophy icon',
  ...props
}: PiTrophySolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8.5 2c-.458 0-.851 0-1.2.083A3 3 0 0 0 5.172 4H3.6A2.6 2.6 0 0 0 1 6.6V8a6 6 0 0 0 5.22 5.95A7 7 0 0 0 11 16.93V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-3.07a7 7 0 0 0 4.78-2.98A6 6 0 0 0 23 8V6.6A2.6 2.6 0 0 0 20.4 4h-1.572A3 3 0 0 0 16.7 2.083c-.349-.084-.742-.084-1.2-.083zM3.6 6H5v4q.001.805.175 1.56A4 4 0 0 1 3 8V6.6a.6.6 0 0 1 .6-.6ZM21 8a4 4 0 0 1-2.175 3.56A7 7 0 0 0 19 10V6h1.4a.6.6 0 0 1 .6.6z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

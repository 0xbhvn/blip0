import React from 'react';

/**
 * PiShare01Solid icon from the solid style in general category.
 */
interface PiShare01SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShare01Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'share-01 icon',
  ...props
}: PiShare01SolidProps): React.ReactElement {
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
      <path d="M18 9a4 4 0 0 1-2.969-1.32c-1.968.67-3.744 1.651-5.241 3.037a4 4 0 0 1 0 2.567c1.498 1.385 3.273 2.366 5.241 3.035a4 4 0 1 1-.932 1.793c-1.977-.706-3.82-1.72-5.423-3.139a4 4 0 1 1 0-5.946c1.603-1.418 3.446-2.433 5.423-3.14A4 4 0 1 1 18 9Z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiAPISolid icon from the solid style in development category.
 */
interface PiAPISolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAPISolid({
  size = 24,
  color,
  className,
  ariaLabel = 'api icon',
  ...props
}: PiAPISolidProps): React.ReactElement {
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
      <path d="M14.5 12H13V9h1.5a1.5 1.5 0 0 1 0 3Z" fill="currentColor"/><path d="M8 12H5v-.867c0-.88.535-1.67 1.351-1.996a.4.4 0 0 1 .298 0A2.15 2.15 0 0 1 8 11.133z" fill="currentColor"/><path fillRule="evenodd" d="M5 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm7 3a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-2h1.5a3.5 3.5 0 1 0 0-7zm8 0a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-12.609.28a2.4 2.4 0 0 0-1.782 0A4.15 4.15 0 0 0 3 11.133V16a1 1 0 1 0 2 0v-2h3v2a1 1 0 1 0 2 0v-4.867A4.15 4.15 0 0 0 7.391 7.28Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

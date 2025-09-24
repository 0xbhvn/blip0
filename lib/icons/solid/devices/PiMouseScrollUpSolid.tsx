import React from 'react';

/**
 * PiMouseScrollUpSolid icon from the solid style in devices category.
 */
interface PiMouseScrollUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseScrollUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-scroll-up icon',
  ...props
}: PiMouseScrollUpSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M4 10a8 8 0 1 1 16 0v4a8 8 0 1 1-16 0zm8-2.374c-.328 0-.656.11-.925.328A11 11 0 0 0 9.2 9.9a1 1 0 0 0 1.6 1.2A9 9 0 0 1 12 9.792q.665.594 1.2 1.308a1 1 0 0 0 1.6-1.2 11 11 0 0 0-1.875-1.946A1.47 1.47 0 0 0 12 7.626Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

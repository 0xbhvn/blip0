import React from 'react';

/**
 * PiUserPlusSolid icon from the solid style in users category.
 */
interface PiUserPlusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserPlusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-plus icon',
  ...props
}: PiUserPlusSolidProps): React.ReactElement {
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
      <path d="M2 19a5 5 0 0 1 5-5h5.17A3 3 0 0 0 15 18a3 3 0 0 0 4.562 2.562A3 3 0 0 1 17 22H5a3 3 0 0 1-3-3Z" fill="currentColor"/><path d="M11 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" fill="currentColor"/><path d="M19 12a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" fill="currentColor"/>
    </svg>
  );
}

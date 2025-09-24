import React from 'react';

/**
 * PiUserRemoveSolid icon from the solid style in users category.
 */
interface PiUserRemoveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserRemoveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-remove icon',
  ...props
}: PiUserRemoveSolidProps): JSX.Element {
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
      <path d="M2 19a5 5 0 0 1 5-5h5.17A3 3 0 0 0 15 18h4.9q.1.485.1 1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z" fill="currentColor"/><path d="M11 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" fill="currentColor"/><path d="M15 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

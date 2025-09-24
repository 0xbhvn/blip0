import React from 'react';

/**
 * PiUserCancelSolid icon from the solid style in users category.
 */
interface PiUserCancelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserCancelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-cancel icon',
  ...props
}: PiUserCancelSolidProps): React.ReactElement {
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
      <path d="M11 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" fill="currentColor"/><path d="M13.17 14H7a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 2.529-1.385 3 3 0 0 1-.65-.494l-.379-.378-.379.378a3 3 0 1 1-4.242-4.242l.378-.379-.378-.379A3 3 0 0 1 13.17 14Z" fill="currentColor"/><path d="m18.5 14.086-1.793-1.793a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.414L19.914 15.5l1.793-1.793a1 1 0 0 0-1.414-1.414z" fill="currentColor"/>
    </svg>
  );
}

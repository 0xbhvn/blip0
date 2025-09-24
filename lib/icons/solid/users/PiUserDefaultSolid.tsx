import React from 'react';

/**
 * PiUserDefaultSolid icon from the solid style in users category.
 */
interface PiUserDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-default icon',
  ...props
}: PiUserDefaultSolidProps): React.ReactElement {
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
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" fill="currentColor"/><path d="M8 14a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5z" fill="currentColor"/>
    </svg>
  );
}

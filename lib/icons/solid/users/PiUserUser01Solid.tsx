import React from 'react';

/**
 * PiUserUser01Solid icon from the solid style in users category.
 */
interface PiUserUser01SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserUser01Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-user-01 icon',
  ...props
}: PiUserUser01SolidProps): JSX.Element {
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
      <path d="M12 2.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" fill="currentColor"/><path d="M3 18a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4Z" fill="currentColor"/>
    </svg>
  );
}

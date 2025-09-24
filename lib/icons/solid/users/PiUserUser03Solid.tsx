import React from 'react';

/**
 * PiUserUser03Solid icon from the solid style in users category.
 */
interface PiUserUser03SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserUser03Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-user-03 icon',
  ...props
}: PiUserUser03SolidProps): React.ReactElement {
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
      <path d="M12 2.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" fill="currentColor"/><path d="M10.112 13.916c-3.45-.956-6.862 1.638-6.862 5.218a2.616 2.616 0 0 0 2.616 2.616h12.268a2.616 2.616 0 0 0 2.616-2.616c0-3.58-3.412-6.174-6.861-5.218l-.696.193a4.47 4.47 0 0 1-2.386 0z" fill="currentColor"/>
    </svg>
  );
}

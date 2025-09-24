import React from 'react';

/**
 * PiEye02OnSolid icon from the solid style in security category.
 */
interface PiEye02OnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEye02OnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'eye-02-on icon',
  ...props
}: PiEye02OnSolidProps): JSX.Element {
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
      <path d="M5.848 10.383C4.524 11.72 4 13.23 4 14a1 1 0 1 1-2 0c0-1.417.826-3.407 2.427-5.024C6.069 7.318 8.572 6 12 6s5.93 1.318 7.573 2.976C21.174 10.593 22 12.583 22 14a1 1 0 1 1-2 0c0-.77-.524-2.28-1.848-3.617C16.869 9.088 14.872 8 12 8s-4.87 1.088-6.152 2.383Z" fill="currentColor"/><path d="M12 10.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiBurgerSolid icon from the solid style in food category.
 */
interface PiBurgerSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBurgerSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'burger icon',
  ...props
}: PiBurgerSolidProps): JSX.Element {
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
      <path d="M22 8.757c0-2.152-1.546-3.608-3.387-4.473C16.753 3.411 14.347 3 12 3s-4.753.41-6.613 1.284C3.546 5.149 2 6.605 2 8.757 2 10.079 3.144 11 4.361 11h15.278C20.856 11 22 10.079 22 8.757Z" fill="currentColor"/><path d="M3.6 16A1.6 1.6 0 0 0 2 17.6 3.4 3.4 0 0 0 5.4 21h13.2a3.4 3.4 0 0 0 3.4-3.4 1.6 1.6 0 0 0-1.6-1.6z" fill="currentColor"/><path d="M7.576 14.318c.602-.424 1.58-.424 2.182 0 1.293.91 3.192.91 4.484 0 .603-.424 1.58-.424 2.183 0 1.293.91 3.191.91 4.484 0a1 1 0 1 0-1.15-1.636c-.603.424-1.58.424-2.183 0-1.293-.91-3.192-.91-4.485 0-.602.424-1.58.424-2.182 0-1.293-.91-3.191-.91-4.484 0-.602.424-1.58.424-2.183 0a1 1 0 1 0-1.15 1.636c1.292.91 3.191.91 4.484 0Z" fill="currentColor"/>
    </svg>
  );
}

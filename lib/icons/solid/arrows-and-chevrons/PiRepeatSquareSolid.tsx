import React from 'react';

/**
 * PiRepeatSquareSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiRepeatSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRepeatSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'repeat-square icon',
  ...props
}: PiRepeatSquareSolidProps): React.ReactElement {
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
      <path d="M12.588 1.191a1 1 0 0 0-1.583.909l.061.611q.064.645.093 1.289H9.8c-1.668 0-2.748 0-3.654.294a6 6 0 0 0-3.852 3.852C1.999 9.052 2 10.13 2 11.8v.4c0 1.669 0 2.748.294 3.654A6 6 0 0 0 4.4 18.8a1 1 0 0 0 1.2-1.6 4 4 0 0 1-1.404-1.964C4.012 14.671 4 13.94 4 12s.012-2.672.196-3.236a4 4 0 0 1 2.568-2.568C7.329 6.012 8.061 6 10 6h1.159q-.03.645-.093 1.289l-.061.612a1 1 0 0 0 1.583.908A16.3 16.3 0 0 0 15.7 5.85a1.355 1.355 0 0 0 0-1.7 16.3 16.3 0 0 0-3.112-2.959Z" fill="currentColor"/><path d="M19.6 5.2a1 1 0 1 0-1.2 1.6 4 4 0 0 1 1.404 1.964C19.988 9.328 20 10.06 20 12s-.012 2.672-.196 3.236a4 4 0 0 1-2.568 2.568C16.672 17.988 15.94 18 14 18h-1.158q.027-.645.092-1.289l.061-.611a1 1 0 0 0-1.583-.909A16.3 16.3 0 0 0 8.3 18.15a1.355 1.355 0 0 0 0 1.7 16.3 16.3 0 0 0 3.112 2.959 1 1 0 0 0 1.583-.909l-.061-.611A23 23 0 0 1 12.842 20H14.2c1.669 0 2.748 0 3.654-.294a6 6 0 0 0 3.852-3.852c.295-.906.294-1.985.294-3.654v-.4c0-1.669 0-2.748-.294-3.654A6 6 0 0 0 19.6 5.2Z" fill="currentColor"/>
    </svg>
  );
}

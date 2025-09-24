import React from 'react';

/**
 * PiCopyDefaultSolid icon from the solid style in general category.
 */
interface PiCopyDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCopyDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'copy-default icon',
  ...props
}: PiCopyDefaultSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M13.8 2c-1.668 0-2.748 0-3.654.294a6 6 0 0 0-3.887 3.965l-.113.035a6 6 0 0 0-3.852 3.852C1.999 11.052 2 12.132 2 13.8v.4c0 1.669 0 2.748.294 3.654a6 6 0 0 0 3.852 3.852c.906.295 1.985.294 3.654.294h.4c1.669 0 2.748 0 3.654-.294a6 6 0 0 0 3.887-3.965q.057-.015.113-.035a6 6 0 0 0 3.852-3.852c.295-.906.294-1.985.294-3.654v-.4c0-1.669 0-2.748-.294-3.654a6 6 0 0 0-3.852-3.852C16.948 1.999 15.87 2 14.2 2zM9.909 6c-.512 0-.967 0-1.376.007a4 4 0 0 1 2.232-1.811C11.329 4.012 12.061 4 14 4s2.672.012 3.236.196a4 4 0 0 1 2.568 2.568C19.988 7.329 20 8.061 20 10s-.012 2.672-.196 3.236a4 4 0 0 1-1.81 2.232c.006-.409.006-.863.006-1.375V13.8c0-1.668 0-2.748-.294-3.654a6 6 0 0 0-3.852-3.852C12.948 5.999 11.87 6 10.2 6z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

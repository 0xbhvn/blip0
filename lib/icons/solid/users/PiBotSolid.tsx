import React from 'react';

/**
 * PiBotSolid icon from the solid style in users category.
 */
interface PiBotSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBotSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bot icon',
  ...props
}: PiBotSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M13 2a1 1 0 1 0-2 0v4H9.8c-1.668 0-2.748 0-3.654.294a6 6 0 0 0-3.852 3.852C1.999 11.052 2 12.13 2 13.8v.4c0 1.669 0 2.748.294 3.654a6 6 0 0 0 3.852 3.852c.906.295 1.985.294 3.654.294h4.4c1.669 0 2.748 0 3.654-.294a6 6 0 0 0 3.852-3.852c.295-.906.294-1.985.294-3.654v-.4c0-1.669 0-2.748-.294-3.654a6 6 0 0 0-3.852-3.852C16.948 5.999 15.87 6 14.2 6H13zM6.9 13a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm6 0a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

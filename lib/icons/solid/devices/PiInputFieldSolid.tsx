import React from 'react';

/**
 * PiInputFieldSolid icon from the solid style in devices category.
 */
interface PiInputFieldSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInputFieldSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'input-field icon',
  ...props
}: PiInputFieldSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M14.518 4.068C14.295 4.008 13.994 4 13 4a1 1 0 0 1 0-2h.138c.795 0 1.386 0 1.897.136A4 4 0 0 1 17 3.354a4 4 0 0 1 1.965-1.218C19.476 2 20.067 2 20.863 2H21a1 1 0 1 1 0 2c-.994 0-1.295.009-1.518.068a2 2 0 0 0-1.414 1.414C18.01 5.7 18 5.99 18 6.92v10.16c0 .93.01 1.222.068 1.438a2 2 0 0 0 1.414 1.414c.223.06.524.068 1.518.068a1 1 0 1 1 0 2h-.137c-.796 0-1.387 0-1.898-.136A4 4 0 0 1 17 20.646a4 4 0 0 1-1.965 1.218c-.511.137-1.102.137-1.897.136H13a1 1 0 0 1 0-2c.994 0 1.295-.009 1.518-.068a2 2 0 0 0 1.414-1.414c.032-.12.049-.26.058-.518H6.884c-.817 0-1.375 0-1.86-.096a5 5 0 0 1-3.928-3.928C1 13.49 1 12.933 1 12.116v-.232c0-.817 0-1.375.096-1.86a5 5 0 0 1 3.929-3.928C5.509 6 6.067 6 6.885 6h9.105a2.3 2.3 0 0 0-.058-.518 2 2 0 0 0-1.414-1.414ZM7 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clipRule="evenodd" fill="currentColor"/><path d="M20.339 7.604a1 1 0 0 1 1.411.089 5 5 0 0 1 1.154 2.332c.096.484.096 1.042.096 1.86v.23c0 .818 0 1.376-.096 1.86a5 5 0 0 1-1.154 2.332 1 1 0 0 1-1.5-1.323 3 3 0 0 0 .692-1.399c.053-.265.058-.608.058-1.585s-.005-1.32-.058-1.585a3 3 0 0 0-.692-1.4 1 1 0 0 1 .088-1.41Z" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiBallFootballSolid icon from the solid style in sports category.
 */
interface PiBallFootballSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBallFootballSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ball-football icon',
  ...props
}: PiBallFootballSolidProps): React.ReactElement {
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
      <path d="M2.187 12.393a23 23 0 0 0-.414 3.563c-.07 1.745.272 3.262 1.64 4.63 1.369 1.37 2.886 1.711 4.631 1.64a23 23 0 0 0 3.563-.413 42.4 42.4 0 0 1-9.42-9.42Z" fill="currentColor"/><path fillRule="evenodd" d="M14.11 21.116c1.57-.576 3.08-1.43 4.33-2.68s2.104-2.76 2.68-4.331A40.3 40.3 0 0 0 9.895 2.88c-1.572.576-3.082 1.43-4.332 2.68S3.46 8.32 2.883 9.89A40.3 40.3 0 0 0 14.11 21.117Zm-4.317-8.323a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0-1.414-1.414z" clipRule="evenodd" fill="currentColor"/><path d="M12.397 2.183a42.4 42.4 0 0 1 9.42 9.42c.25-1.247.369-2.467.413-3.563.07-1.745-.271-3.262-1.64-4.63-1.369-1.369-2.885-1.71-4.63-1.64a23 23 0 0 0-3.563.413Z" fill="currentColor"/>
    </svg>
  );
}

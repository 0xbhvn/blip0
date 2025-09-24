import React from 'react';

/**
 * PiUserUser03Stroke icon from the stroke style in users category.
 */
interface PiUserUser03StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserUser03Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-user-03 icon',
  ...props
}: PiUserUser03StrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.866 21h12.268c1.03 0 1.866-.835 1.866-1.866 0-3.084-2.94-5.32-5.911-4.495l-.696.193a5.2 5.2 0 0 1-2.786 0l-.696-.193C6.94 13.815 4 16.05 4 19.134 4 20.164 4.835 21 5.866 21Z" fill="none"/>
    </svg>
  );
}

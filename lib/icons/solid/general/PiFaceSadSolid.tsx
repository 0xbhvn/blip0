import React from 'react';

/**
 * PiFaceSadSolid icon from the solid style in general category.
 */
interface PiFaceSadSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceSadSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'face-sad icon',
  ...props
}: PiFaceSadSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12ZM10 9.685a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zm4.852 7.115a1 1 0 1 0 1.428-1.4 6 6 0 0 0-4.284-1.8c-1.679 0-3.197.69-4.285 1.8a1 1 0 1 0 1.428 1.4 4 4 0 0 1 2.857-1.2 3.98 3.98 0 0 1 2.856 1.2ZM15 8.685a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

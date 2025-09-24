import React from 'react';

/**
 * PiKeyRightSolid icon from the solid style in security category.
 */
interface PiKeyRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-right icon',
  ...props
}: PiKeyRightSolidProps): React.ReactElement {
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
      <path d="M6 7a5 5 0 0 1 4.9 4H22a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-2h-2v1a1 1 0 1 1-2 0v-1h-6.1A5.002 5.002 0 0 1 1 12a5 5 0 0 1 5-5Z" fill="currentColor"/>
    </svg>
  );
}

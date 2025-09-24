import React from 'react';

/**
 * PiAmieSoSolid icon from the solid style in apps-&-social category.
 */
interface PiAmieSoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAmieSoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'amie-so icon',
  ...props
}: PiAmieSoSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M2 8.21a6.21 6.21 0 0 1 10-4.92A6.21 6.21 0 0 1 20.71 12 6.21 6.21 0 0 1 12 20.71 6.21 6.21 0 0 1 3.29 12 6.2 6.2 0 0 1 2 8.21ZM12 8a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

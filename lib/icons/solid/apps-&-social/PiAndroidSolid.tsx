import React from 'react';

/**
 * PiAndroidSolid icon from the solid style in apps-&-social category.
 */
interface PiAndroidSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAndroidSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'android icon',
  ...props
}: PiAndroidSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M3.5 4.134a1 1 0 0 1 1.366.366l1.267 2.194A10.95 10.95 0 0 1 12 5c2.156 0 4.169.621 5.867 1.694L19.134 4.5a1 1 0 1 1 1.732 1l-1.399 2.423A10.97 10.97 0 0 1 23 16v1.982c0 .562-.456 1.018-1.018 1.018H2.018A1.02 1.02 0 0 1 1 17.982V16c0-3.193 1.362-6.069 3.533-8.077L3.134 5.5A1 1 0 0 1 3.5 4.134ZM8 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

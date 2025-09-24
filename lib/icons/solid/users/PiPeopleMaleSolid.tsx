import React from 'react';

/**
 * PiPeopleMaleSolid icon from the solid style in users category.
 */
interface PiPeopleMaleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPeopleMaleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'people-male icon',
  ...props
}: PiPeopleMaleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M12 1.034a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-.616 8.013a5 5 0 0 0-4.93 4.172l-.44 2.615A1 1 0 0 0 7 17h1.153l.532 3.19a3.36 3.36 0 0 0 6.63 0l.529-3.17 1.128.027a1 1 0 0 0 1.01-1.164l-.44-2.655a5 5 0 0 0-4.933-4.181z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

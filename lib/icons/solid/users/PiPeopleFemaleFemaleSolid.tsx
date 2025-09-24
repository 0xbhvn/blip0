import React from 'react';

/**
 * PiPeopleFemaleFemaleSolid icon from the solid style in users category.
 */
interface PiPeopleFemaleFemaleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPeopleFemaleFemaleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'people-female-female icon',
  ...props
}: PiPeopleFemaleFemaleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M6 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm.004 7a3.87 3.87 0 0 0-3.807 3.19l-1.182 6.635A1 1 0 0 0 2 20h1.233l.295 1.1a2.563 2.563 0 0 0 4.954-.009L8.77 20H10a1 1 0 0 0 .985-1.174l-1.172-6.632A3.87 3.87 0 0 0 6.004 9ZM15 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3.004 4a3.87 3.87 0 0 0-3.807 3.19l-1.181 6.635A1 1 0 0 0 14 20h1.233l.295 1.1a2.563 2.563 0 0 0 4.954-.009L20.77 20H22a1 1 0 0 0 .985-1.174l-1.172-6.632A3.87 3.87 0 0 0 18.004 9Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

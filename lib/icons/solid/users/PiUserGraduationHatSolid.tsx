import React from 'react';

/**
 * PiUserGraduationHatSolid icon from the solid style in users category.
 */
interface PiUserGraduationHatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserGraduationHatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-graduation-hat icon',
  ...props
}: PiUserGraduationHatSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M11.725 1.038a1 1 0 0 1 .55 0l7 2a1 1 0 0 1 0 1.924l-2.456.701a5 5 0 1 1-9.638 0L6 5.326V7a1 1 0 0 1-2 0V4a1 1 0 0 1 .725-.962zm3.17 5.175-2.62.749a1 1 0 0 1-.55 0l-2.62-.75Q9 6.59 9 7a3 3 0 1 0 5.896-.787Z" clipRule="evenodd" fill="currentColor"/><path d="M3 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z" fill="currentColor"/>
    </svg>
  );
}

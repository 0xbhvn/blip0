import React from 'react';

/**
 * PiUserCircleSolid icon from the solid style in users category.
 */
interface PiUserCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-circle icon',
  ...props
}: PiUserCircleSolidProps): React.ReactElement {
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
      <g clipPath="url(#a)"><path fillRule="evenodd" d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12a11.47 11.47 0 0 1-3.456 8.219A11.47 11.47 0 0 1 12 23.5a11.47 11.47 0 0 1-8.044-3.281A11.47 11.47 0 0 1 .5 12Zm8 3c-1.634 0-3.098.85-3.886 2.144q.486.696 1.09 1.288A8.97 8.97 0 0 0 12 21c2.45 0 4.671-.978 6.295-2.568a9 9 0 0 0 1.091-1.288C18.598 15.85 17.135 15 15.5 15zm0-5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" clipRule="evenodd" fill="currentColor"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z" fill="currentColor"/></clipPath></defs>
    </svg>
  );
}

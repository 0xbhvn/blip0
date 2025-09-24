import React from 'react';

/**
 * PiPinDefaultSolid icon from the solid style in general category.
 */
interface PiPinDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPinDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pin-default icon',
  ...props
}: PiPinDefaultSolidProps): React.ReactElement {
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
      <path d="M15.628 1.97a39 39 0 0 0-7.256 0 2.6 2.6 0 0 0-2.286 3.196l.986 4.093a.47.47 0 0 1-.037.343.94.94 0 0 1-.358.353A5.54 5.54 0 0 0 4 14.698c0 .75.55 1.384 1.292 1.49 1.888.27 3.79.446 5.708.492V21a1 1 0 1 0 2 0v-4.32a49 49 0 0 0 5.708-.492A1.505 1.505 0 0 0 20 14.698a5.54 5.54 0 0 0-2.677-4.743.94.94 0 0 1-.358-.353.47.47 0 0 1-.037-.343l.986-4.093a2.6 2.6 0 0 0-2.286-3.197Z" fill="currentColor"/>
    </svg>
  );
}

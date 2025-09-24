import React from 'react';

/**
 * PiAcDefaultSolid icon from the solid style in appliances category.
 */
interface PiAcDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-default icon',
  ...props
}: PiAcDefaultSolidProps): JSX.Element {
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
      <path d="M1 10a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm15 1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}

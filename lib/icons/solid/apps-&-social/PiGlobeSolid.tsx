import React from 'react';

/**
 * PiGlobeSolid icon from the solid style in apps-&-social category.
 */
interface PiGlobeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGlobeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'globe icon',
  ...props
}: PiGlobeSolidProps): JSX.Element {
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
      <path d="M12.738 2.176A1 1 0 0 0 12 1.85c5.268 0 9.599 4.014 10.101 9.15h-5.494a15 15 0 0 0-3.869-8.824Z" fill="currentColor"/><path d="M22.101 13h-5.494a15 15 0 0 1-3.869 8.825 1 1 0 0 1-1.476 0A15 15 0 0 1 7.392 13H1.898c.503 5.136 4.834 9.15 10.102 9.15s9.599-4.014 10.1-9.15Z" fill="currentColor"/><path d="M1.898 11C2.401 5.864 6.732 1.85 12 1.85a1 1 0 0 0-.739.326A15 15 0 0 0 7.393 11z" fill="currentColor"/><path d="M12 19.592A13 13 0 0 1 9.4 13h5.2a13 13 0 0 1-2.6 6.592Z" fill="currentColor"/><path d="M12 4.408A13 13 0 0 0 9.4 11h5.2A13 13 0 0 0 12 4.408Z" fill="currentColor"/>
    </svg>
  );
}

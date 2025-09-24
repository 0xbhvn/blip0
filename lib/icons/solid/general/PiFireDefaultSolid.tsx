import React from 'react';

/**
 * PiFireDefaultSolid icon from the solid style in general category.
 */
interface PiFireDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFireDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'fire-default icon',
  ...props
}: PiFireDefaultSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12.012 1.316a1 1 0 0 1 .923-.133c1.374.488 3.365 1.993 4.996 4.012C19.582 7.235 21 9.968 21 13c0 2.213-.737 4.458-2.253 6.164C17.215 20.888 14.938 22 12 22s-5.215-1.112-6.747-2.836C3.737 17.458 3 15.213 3 13c0-2.934 1.33-5.587 2.907-7.602a1 1 0 0 1 1.664.135c.274.499.58.964.819 1.307l.045.065c.166-.064.357-.164.571-.311.428-.294.874-.727 1.278-1.25.836-1.077 1.339-2.322 1.316-3.193a1 1 0 0 1 .412-.835Zm.756 10.264a1 1 0 0 1 .845 0c.535.25 1.02.714 1.399 1.22.391.522.732 1.167.935 1.869.411 1.416.28 3.203-1.32 4.467-.911.719-2.1.966-3.171.827-1.072-.139-2.17-.684-2.788-1.728-.51-.862-.566-1.748-.313-2.561.24-.772.74-1.429 1.265-1.954 1.048-1.048 2.441-1.81 3.148-2.14Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

import React from 'react';

/**
 * PiLandlinePhoneSolid icon from the solid style in devices category.
 */
interface PiLandlinePhoneSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLandlinePhoneSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'landline-phone icon',
  ...props
}: PiLandlinePhoneSolidProps): JSX.Element {
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
      <path d="M6.5 2A2.5 2.5 0 0 1 9 4.5v15A2.5 2.5 0 0 1 6.5 22h-2A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2z" fill="currentColor"/><path fillRule="evenodd" d="M19 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-8a1 1 0 0 1-1-1V4l.005-.103A1 1 0 0 1 11 3zm-6 13a1 1 0 1 0 0 2h1.5a1 1 0 1 0 0-2zm4.5 0a1 1 0 1 0 0 2H19a1 1 0 1 0 0-2zM13 13a1 1 0 1 0 0 2h1.5a1 1 0 1 0 0-2zm4.5 0a1 1 0 1 0 0 2H19a1 1 0 1 0 0-2zM13 5a1 1 0 0 0-.995.897L12 6v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-.898-.995L19 5z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}

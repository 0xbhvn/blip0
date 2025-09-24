import React from 'react';

/**
 * PiSolidjsSolid icon from the solid style in development category.
 */
interface PiSolidjsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSolidjsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'solidjs icon',
  ...props
}: PiSolidjsSolidProps): React.ReactElement {
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
      <path d="M21.405 7.514C18.104 4.58 13.838.953 8.295 2.282l-.026.007c-3.558.956-5.34 3.81-5.164 6.362.088 1.276.68 2.494 1.815 3.244 1.136.75 2.66.928 4.42.456L21 9.227a1 1 0 0 0 .405-1.713Z" fill="currentColor"/><path d="M16.472 21.935c3.557-.956 5.34-3.81 5.164-6.361-.088-1.277-.68-2.495-1.815-3.244-1.136-.75-2.66-.929-4.421-.457L3.74 14.997a1 1 0 0 0-.405 1.714c3.3 2.933 7.567 6.56 13.11 5.231z" fill="currentColor"/>
    </svg>
  );
}

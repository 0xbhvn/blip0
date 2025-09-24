import React from 'react';

/**
 * PiRepeatRectangularSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiRepeatRectangularSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRepeatRectangularSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'repeat-rectangular icon',
  ...props
}: PiRepeatRectangularSolidProps): JSX.Element {
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
      <path d="M17.502 1.133a1 1 0 0 1 1.086.058A16.3 16.3 0 0 1 21.7 4.15a1.35 1.35 0 0 1 0 1.7 16.3 16.3 0 0 1-3.112 2.959 1 1 0 0 1-1.583-.908l.061-.612q.064-.644.093-1.289H11c-1.417 0-2.419 0-3.203.065-.771.063-1.243.182-1.613.371a4 4 0 0 0-1.748 1.748c-.347.681-.427 1.606-.435 3.82a1 1 0 0 1-2-.008c.008-2.086.048-3.533.653-4.72a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.509 4 9.593 4 10.956 4h6.203q-.03-.645-.093-1.289l-.061-.611a1 1 0 0 1 .497-.967Z" fill="currentColor"/><path d="M21.002 11A1 1 0 0 1 22 12.004c-.008 2.086-.048 3.533-.653 4.72a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071H6.84q.03.645.093 1.289l.061.611.005.074a1 1 0 0 1-1.588.835A16.3 16.3 0 0 1 2.3 19.85c-.4-.497-.4-1.203 0-1.7a16.3 16.3 0 0 1 3.112-2.959 1 1 0 0 1 1.583.908l-.061.612q-.065.644-.093 1.289H13c1.417 0 2.419 0 3.203-.065.771-.063 1.243-.182 1.613-.371a4 4 0 0 0 1.748-1.748c.347-.681.427-1.606.435-3.82A1 1 0 0 1 21.002 11Z" fill="currentColor"/>
    </svg>
  );
}

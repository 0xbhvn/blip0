import React from 'react';

/**
 * PiMedicinePillsCapsulesTabletsSolid icon from the solid style in medical category.
 */
interface PiMedicinePillsCapsulesTabletsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicinePillsCapsulesTabletsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'medicine-pills-capsules-tablets icon',
  ...props
}: PiMedicinePillsCapsulesTabletsSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9.075 2.531a5.228 5.228 0 0 1 7.394 7.394l-2.565 2.564L6.51 5.096zm4.87 1.379a2.21 2.21 0 0 0-2.512.431L10.01 5.764a1 1 0 0 0 1.414 1.415l1.423-1.424a.21.21 0 0 1 .237-.04 1 1 0 0 0 .862-1.805Z" clipRule="evenodd" fill="currentColor"/><path d="M5.096 6.51 2.531 9.075a5.228 5.228 0 0 0 7.394 7.394l2.565-2.565z" fill="currentColor"/><path d="m22.902 18.987-9.797.034a5 5 0 0 0 9.797-.034Z" fill="currentColor"/><path d="M17.983 13.001a5 5 0 0 1 4.913 3.986l-9.799.034A5 5 0 0 1 17.983 13Z" fill="currentColor"/>
    </svg>
  );
}

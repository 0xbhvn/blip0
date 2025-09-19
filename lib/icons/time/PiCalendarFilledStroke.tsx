import React from 'react';

/**
 * PiCalendarFilledStroke icon from the stroke style in time category.
 */
interface PiCalendarFilledStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCalendarFilledStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'calendar-filled icon',
  ...props
}: PiCalendarFilledStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.96 10c.04.788.04 1.755.04 3 0 2.796 0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 22 14.796 22 12 22s-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 17.194 3 15.796 3 13c0-1.245 0-2.212.04-3m17.92 0c-.05-.982-.163-1.684-.417-2.296a6 6 0 0 0-3.247-3.247A5 5 0 0 0 16 4.127M20.96 10H3.04m0 0c.05-.982.163-1.684.417-2.296a6 6 0 0 1 3.247-3.247A5 5 0 0 1 8 4.127M8 2v2.128m0 0V6m0-1.872C8.941 4 10.172 4 12 4s3.059 0 4 .128M16 2v2.128m0 0V6m-7.99 8H8m.01 4H8m4.01-4H12m.01 4H12m4.01-4H16m.01 4H16" fill="none"/>
    </svg>
  );
}

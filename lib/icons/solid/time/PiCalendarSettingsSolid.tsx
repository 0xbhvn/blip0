import React from 'react';

/**
 * PiCalendarSettingsSolid icon from the solid style in time category.
 */
interface PiCalendarSettingsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCalendarSettingsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'calendar-settings icon',
  ...props
}: PiCalendarSettingsSolidProps): JSX.Element {
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
      <path d="M8 1a1 1 0 0 1 1 1v1.04C9.805 3 10.759 3 11.916 3h.168c1.157 0 2.111 0 2.916.04V2a1 1 0 1 1 2 0v1.305q.35.092.679.228a7 7 0 0 1 3.788 3.788c.214.517.339 1.064.414 1.679H2.12c.074-.615.199-1.162.413-1.679A7 7 0 0 1 6.32 3.533 5 5 0 0 1 7 3.305V2a1 1 0 0 1 1-1Z" fill="currentColor"/><path d="M2.01 11C2 11.581 2 12.235 2 12.973v.064c0 1.366 0 2.443.06 3.314.06.888.186 1.634.473 2.328a7 7 0 0 0 3.788 3.788c.694.287 1.44.413 2.328.474.87.059 1.948.059 3.314.059h.077l1.06-.001a3 3 0 0 1-.928-2.14l-.005-.443-.31-.317a3 3 0 0 1 0-4.198l.31-.317.005-.444a3 3 0 0 1 2.968-2.968l.444-.005.317-.31A3 3 0 0 1 17.998 11z" fill="currentColor"/><path d="M21.99 11q.011.64.01 1.409a3 3 0 0 0-1.14-.237l-.444-.005-.317-.31A3 3 0 0 0 18.002 11z" fill="currentColor"/><path d="M18 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path fillRule="evenodd" d="M18.7 13.286a1 1 0 0 0-1.4 0l-.891.873-1.248.013a1 1 0 0 0-.99.99l-.012 1.247-.873.891a1 1 0 0 0 0 1.4l.873.891.013 1.248a1 1 0 0 0 .99.99l1.247.012.891.873a1 1 0 0 0 1.4 0l.891-.873 1.248-.013a1 1 0 0 0 .99-.99l.012-1.247.873-.891a1 1 0 0 0 0-1.4l-.873-.891-.013-1.248a1 1 0 0 0-.99-.99l-1.247-.012zm-1.179 2.583.479-.47.479.47a1 1 0 0 0 .69.285l.67.007.007.67a1 1 0 0 0 .285.69l.47.479-.47.479a1 1 0 0 0-.285.69l-.007.67-.67.007a1 1 0 0 0-.69.285l-.479.47-.479-.47a1 1 0 0 0-.69-.285l-.67-.007-.007-.67a1 1 0 0 0-.285-.69l-.47-.479.47-.479a1 1 0 0 0 .285-.69l.007-.67.67-.007a1 1 0 0 0 .69-.285Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
